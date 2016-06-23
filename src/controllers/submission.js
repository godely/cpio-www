'use strict'

const Submission = require('../models/submission'),
  Problem = require('../models/problem'),
  Contest = require('../models/contest'),
  SubmissionQueue = require('../services/queue').SubmissionQueue,
  Redis = require('../services/dbs').redisClient

const async = require('async'),
  fs = require('fs'),
  multiparty = require('multiparty'),
  _ = require('lodash')

function createSubmission (submission, userId, callback) {
  var sub = new Submission({
    contest: submission.contest,
    contestant: userId,
    rep: submission.rep,
    problem: submission.problem,
    language: submission.language,
    code: submission.code
  })
  sub.save(callback)
}

function enqueueSubmission (oj, s, callback) {
  var job = SubmissionQueue.create(`submission:${oj}`, {
    id: s._id
  })
  job.attempts(5)
  job.backoff({
    delay: 60 * 1000,
    type: 'exponential'
  })
  job.save(callback)
}

exports.tryExtractFile = function (req, res, next) {
  if (req.body.id) return next()
  var form = new multiparty.Form()
  // TODO(stor): erase the tmp file
  async.waterfall([
    (callback) => {
      form.parse(req, callback)
    },
    (fields, files, callback) => {
      try {
        var fpath = files.file[0].path
        req.body = {}
        req.body.id = fields.id[0]
        req.body.problem = fields.problem[0]
        req.body.language = fields.language[0]
      } catch (err) {
        return callback(err)
      }
      fs.readFile(fpath, 'utf8', callback)
    },
    (code, callback) => {
      req.body.code = code
      callback()
    }
  ], (err) => {
    if (err) return res.status(400).send()
    return next()
  })
}

exports.submit = function (req, res, next) {
  req.body.contest = req.body.id
  delete req.body.id

  let submission = req.body, userId = req.user._id, problem

  let asyncValid = Submission.validateChain(req)
    .seeLanguage()
    .seeCode()
    .asyncOk()

  async.waterfall([
    (next) => {
      async.parallel({
        contest: (next) => {
          Contest.findById(submission.contest, 'contestants problems', next)
        },
        problem: (next) => {
          Problem.findById(submission.problem, next)
        }
      }, next)
    },
    (results, next) => {
      if (!results.problem || !results.contest) return next(new Error())
      if (!results.contest.problemInContest(submission.problem) ||
          !results.contest.userInContest(userId)) return next(new Error())
      submission.rep = results.contest.getUserRepresentative(userId)
      problem = results.problem
      createSubmission(submission, userId, next)
    },
    (_submission, _ins, next) => {
      submission = _submission
      enqueueSubmission(problem.oj, submission, next)
    },
  ], (err) => {
    if (err) return res.status(400).send()
    return res.json({
      submission: submission
    })
  })
}

exports.getById = function (req, res, next) {
  Submission.findById(req.params.id)
  .populate({
    path: 'contest',
    select: 'name'
  })
  .populate({
    path: 'contestant',
    select: 'local.username'
  })
  .populate({
    path: 'problem',
    select: 'fullName'
  })
  .then((submission) => {
    if (!submission) {
      return res.status(400).send()
    }
    return res.json({
      submission: submission
    })
  })
}

exports.getUserContestSubmissions = function(req, res) {
  let contestId = req.params.id
  Submission.find({
    contest: contestId,
    contestant: req.user._id
  }, '_id date verdict language problem', (err, submissions) => {
    if (err) return res.status(400).send()
    return res.json({submissions: submissions})
  })
}
