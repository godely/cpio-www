angular.module('General')
  .value('Countries', [
    { Name: 'Afghanistan', Code: 'af' },
    { Name: 'Åland Islands', Code: 'ax' },
    { Name: 'Albania', Code: 'al' },
    { Name: 'Algeria', Code: 'dz' },
    { Name: 'American Samoa', Code: 'as' },
    { Name: 'Andorra', Code: 'ad' },
    { Name: 'Angola', Code: 'ao' },
    { Name: 'Anguilla', Code: 'ai' },
    { Name: 'Antarctica', Code: 'aq' },
    { Name: 'Antigua and Barbuda', Code: 'ag' },
    { Name: 'Argentina', Code: 'ar' },
    { Name: 'Armenia', Code: 'am' },
    { Name: 'Aruba', Code: 'aw' },
    { Name: 'Australia', Code: 'au' },
    { Name: 'Austria', Code: 'at' },
    { Name: 'Azerbaijan', Code: 'az' },
    { Name: 'Bahamas', Code: 'bs' },
    { Name: 'Bahrain', Code: 'bh' },
    { Name: 'Bangladesh', Code: 'bd' },
    { Name: 'Barbados', Code: 'bb' },
    { Name: 'Belarus', Code: 'by' },
    { Name: 'Belgium', Code: 'be' },
    { Name: 'Belize', Code: 'bz' },
    { Name: 'Benin', Code: 'bj' },
    { Name: 'Bermuda', Code: 'bm' },
    { Name: 'Bhutan', Code: 'bt' },
    { Name: 'Bolivia, Plurinational State of', Code: 'bo' },
    { Name: 'Bonaire, Sint Eustatius and Saba', Code: 'bq' },
    { Name: 'Bosnia and Herzegovina', Code: 'ba' },
    { Name: 'Botswana', Code: 'bw' },
    { Name: 'Bouvet Island', Code: 'bv' },
    { Name: 'Brazil', Code: 'br' },
    { Name: 'British Indian Ocean Territory', Code: 'io' },
    { Name: 'Brunei Darussalam', Code: 'bn' },
    { Name: 'Bulgaria', Code: 'bg' },
    { Name: 'Burkina Faso', Code: 'bf' },
    { Name: 'Burundi', Code: 'bi' },
    { Name: 'Cambodia', Code: 'kh' },
    { Name: 'Cameroon', Code: 'cm' },
    { Name: 'Canada', Code: 'ca' },
    { Name: 'Cape Verde', Code: 'cv' },
    { Name: 'Cayman Islands', Code: 'ky' },
    { Name: 'Central African Republic', Code: 'cf' },
    { Name: 'Chad', Code: 'td' },
    { Name: 'Chile', Code: 'cl' },
    { Name: 'China', Code: 'cn' },
    { Name: 'Christmas Island', Code: 'cx' },
    { Name: 'Cocos (Keeling) Islands', Code: 'cc' },
    { Name: 'Colombia', Code: 'co' },
    { Name: 'Comoros', Code: 'km' },
    { Name: 'Congo', Code: 'cg' },
    { Name: 'Congo, the Democratic Republic of the', Code: 'cd' },
    { Name: 'Cook Islands', Code: 'ck' },
    { Name: 'Costa Rica', Code: 'cr' },
    { Name: 'Côte d\'Ivoire', Code: 'ci' },
    { Name: 'Croatia', Code: 'hr' },
    { Name: 'Cuba', Code: 'cu' },
    { Name: 'Curaçao', Code: 'cw' },
    { Name: 'Cyprus', Code: 'cy' },
    { Name: 'Czech Republic', Code: 'cz' },
    { Name: 'Denmark', Code: 'dk' },
    { Name: 'Djibouti', Code: 'dj' },
    { Name: 'Dominica', Code: 'dm' },
    { Name: 'Dominican Republic', Code: 'do' },
    { Name: 'Ecuador', Code: 'ec' },
    { Name: 'Egypt', Code: 'eg' },
    { Name: 'El Salvador', Code: 'sv' },
    { Name: 'Equatorial Guinea', Code: 'gq' },
    { Name: 'Eritrea', Code: 'er' },
    { Name: 'Estonia', Code: 'ee' },
    { Name: 'Ethiopia', Code: 'et' },
    { Name: 'Falkland Islands (Malvinas)', Code: 'fk' },
    { Name: 'Faroe Islands', Code: 'fo' },
    { Name: 'Fiji', Code: 'fj' },
    { Name: 'Finland', Code: 'fi' },
    { Name: 'France', Code: 'fr' },
    { Name: 'French Guiana', Code: 'gf' },
    { Name: 'French Polynesia', Code: 'pf' },
    { Name: 'French Southern Territories', Code: 'tf' },
    { Name: 'Gabon', Code: 'ga' },
    { Name: 'Gambia', Code: 'gm' },
    { Name: 'Georgia', Code: 'ge' },
    { Name: 'Germany', Code: 'de' },
    { Name: 'Ghana', Code: 'gh' },
    { Name: 'Gibraltar', Code: 'gi' },
    { Name: 'Greece', Code: 'gr' },
    { Name: 'Greenland', Code: 'gl' },
    { Name: 'Grenada', Code: 'gd' },
    { Name: 'Guadeloupe', Code: 'gp' },
    { Name: 'Guam', Code: 'gu' },
    { Name: 'Guatemala', Code: 'gt' },
    { Name: 'Guernsey', Code: 'gg' },
    { Name: 'Guinea', Code: 'gn' },
    { Name: 'Guinea-Bissau', Code: 'gw' },
    { Name: 'Guyana', Code: 'gy' },
    { Name: 'Haiti', Code: 'ht' },
    { Name: 'Heard Island and McDonald Islands', Code: 'hm' },
    { Name: 'Holy See (Vatican City State)', Code: 'va' },
    { Name: 'Honduras', Code: 'hn' },
    { Name: 'Hong Kong', Code: 'hk' },
    { Name: 'Hungary', Code: 'hu' },
    { Name: 'Iceland', Code: 'is' },
    { Name: 'India', Code: 'in' },
    { Name: 'Indonesia', Code: 'id' },
    { Name: 'Iran, Islamic Republic of', Code: 'ir' },
    { Name: 'Iraq', Code: 'iq' },
    { Name: 'Ireland', Code: 'ie' },
    { Name: 'Isle of Man', Code: 'im' },
    { Name: 'Israel', Code: 'il' },
    { Name: 'Italy', Code: 'it' },
    { Name: 'Jamaica', Code: 'jm' },
    { Name: 'Japan', Code: 'jp' },
    { Name: 'Jersey', Code: 'je' },
    { Name: 'Jordan', Code: 'jo' },
    { Name: 'Kazakhstan', Code: 'kz' },
    { Name: 'Kenya', Code: 'ke' },
    { Name: 'Kiribati', Code: 'ki' },
    { Name: 'Korea, Democratic People\'s Republic of', Code: 'kp' },
    { Name: 'Korea, Republic of', Code: 'kr' },
    { Name: 'Kuwait', Code: 'kw' },
    { Name: 'Kyrgyzstan', Code: 'kg' },
    { Name: 'Lao People\'s Democratic Republic', Code: 'la' },
    { Name: 'Latvia', Code: 'lv' },
    { Name: 'Lebanon', Code: 'lb' },
    { Name: 'Lesotho', Code: 'ls' },
    { Name: 'Liberia', Code: 'lr' },
    { Name: 'Libya', Code: 'ly' },
    { Name: 'Liechtenstein', Code: 'li' },
    { Name: 'Lithuania', Code: 'lt' },
    { Name: 'Luxembourg', Code: 'lu' },
    { Name: 'Macao', Code: 'mo' },
    { Name: 'Macedonia, the Former Yugoslav Republic of', Code: 'mk' },
    { Name: 'Madagascar', Code: 'mg' },
    { Name: 'Malawi', Code: 'mw' },
    { Name: 'Malaysia', Code: 'my' },
    { Name: 'Maldives', Code: 'mv' },
    { Name: 'Mali', Code: 'ml' },
    { Name: 'Malta', Code: 'mt' },
    { Name: 'Marshall Islands', Code: 'mh' },
    { Name: 'Martinique', Code: 'mq' },
    { Name: 'Mauritania', Code: 'mr' },
    { Name: 'Mauritius', Code: 'mu' },
    { Name: 'Mayotte', Code: 'yt' },
    { Name: 'Mexico', Code: 'mx' },
    { Name: 'Micronesia, Federated States of', Code: 'fm' },
    { Name: 'Moldova, Republic of', Code: 'md' },
    { Name: 'Monaco', Code: 'mc' },
    { Name: 'Mongolia', Code: 'mn' },
    { Name: 'Montenegro', Code: 'me' },
    { Name: 'Montserrat', Code: 'ms' },
    { Name: 'Morocco', Code: 'ma' },
    { Name: 'Mozambique', Code: 'mz' },
    { Name: 'Myanmar', Code: 'mm' },
    { Name: 'Namibia', Code: 'na' },
    { Name: 'Nauru', Code: 'nr' },
    { Name: 'Nepal', Code: 'np' },
    { Name: 'Netherlands', Code: 'nl' },
    { Name: 'New Caledonia', Code: 'nc' },
    { Name: 'New Zealand', Code: 'nz' },
    { Name: 'Nicaragua', Code: 'ni' },
    { Name: 'Niger', Code: 'ne' },
    { Name: 'Nigeria', Code: 'ng' },
    { Name: 'Niue', Code: 'nu' },
    { Name: 'Norfolk Island', Code: 'nf' },
    { Name: 'Northern Mariana Islands', Code: 'mp' },
    { Name: 'Norway', Code: 'no' },
    { Name: 'Oman', Code: 'om' },
    { Name: 'Pakistan', Code: 'pk' },
    { Name: 'Palau', Code: 'pw' },
    { Name: 'Palestine, State of', Code: 'ps' },
    { Name: 'Panama', Code: 'pa' },
    { Name: 'Papua New Guinea', Code: 'pg' },
    { Name: 'Paraguay', Code: 'py' },
    { Name: 'Peru', Code: 'pe' },
    { Name: 'Philippines', Code: 'ph' },
    { Name: 'Pitcairn', Code: 'pn' },
    { Name: 'Poland', Code: 'pl' },
    { Name: 'Portugal', Code: 'pt' },
    { Name: 'Puerto Rico', Code: 'pr' },
    { Name: 'Qatar', Code: 'qa' },
    { Name: 'Réunion', Code: 're' },
    { Name: 'Romania', Code: 'ro' },
    { Name: 'Russian Federation', Code: 'ru' },
    { Name: 'Rwanda', Code: 'rw' },
    { Name: 'Saint Barthélemy', Code: 'bl' },
    { Name: 'Saint Helena, Ascension and Tristan da Cunha', Code: 'sh' },
    { Name: 'Saint Kitts and Nevis', Code: 'kn' },
    { Name: 'Saint Lucia', Code: 'lc' },
    { Name: 'Saint Martin (French part)', Code: 'mf' },
    { Name: 'Saint Pierre and Miquelon', Code: 'pm' },
    { Name: 'Saint Vincent and the Grenadines', Code: 'vc' },
    { Name: 'Samoa', Code: 'ws' },
    { Name: 'San Marino', Code: 'sm' },
    { Name: 'Sao Tome and Principe', Code: 'st' },
    { Name: 'Saudi Arabia', Code: 'sa' },
    { Name: 'Senegal', Code: 'sn' },
    { Name: 'Serbia', Code: 'rs' },
    { Name: 'Seychelles', Code: 'sc' },
    { Name: 'Sierra Leone', Code: 'sl' },
    { Name: 'Singapore', Code: 'sg' },
    { Name: 'Sint Maarten (Dutch part)', Code: 'sx' },
    { Name: 'Slovakia', Code: 'sk' },
    { Name: 'Slovenia', Code: 'si' },
    { Name: 'Solomon Islands', Code: 'sb' },
    { Name: 'Somalia', Code: 'so' },
    { Name: 'South Africa', Code: 'za' },
    { Name: 'South Georgia and the South Sandwich Islands', Code: 'gs' },
    { Name: 'South Sudan', Code: 'ss' },
    { Name: 'Spain', Code: 'es' },
    { Name: 'Sri Lanka', Code: 'lk' },
    { Name: 'Sudan', Code: 'sd' },
    { Name: 'Suriname', Code: 'sr' },
    { Name: 'Svalbard and Jan Mayen', Code: 'sj' },
    { Name: 'Swaziland', Code: 'sz' },
    { Name: 'Sweden', Code: 'se' },
    { Name: 'Switzerland', Code: 'ch' },
    { Name: 'Syrian Arab Republic', Code: 'sy' },
    { Name: 'Taiwan, Province of China', Code: 'tw' },
    { Name: 'Tajikistan', Code: 'tj' },
    { Name: 'Tanzania, United Republic of', Code: 'tz' },
    { Name: 'Thailand', Code: 'th' },
    { Name: 'Timor-Leste', Code: 'tl' },
    { Name: 'Togo', Code: 'tg' },
    { Name: 'Tokelau', Code: 'tk' },
    { Name: 'Tonga', Code: 'to' },
    { Name: 'Trinidad and Tobago', Code: 'tt' },
    { Name: 'Tunisia', Code: 'tn' },
    { Name: 'Turkey', Code: 'tr' },
    { Name: 'Turkmenistan', Code: 'tm' },
    { Name: 'Turks and Caicos Islands', Code: 'tc' },
    { Name: 'Tuvalu', Code: 'tv' },
    { Name: 'Uganda', Code: 'ug' },
    { Name: 'Ukraine', Code: 'ua' },
    { Name: 'United Arab Emirates', Code: 'ae' },
    { Name: 'United Kingdom', Code: 'gb' },
    { Name: 'United States', Code: 'us' },
    { Name: 'United States Minor Outlying Islands', Code: 'um' },
    { Name: 'Uruguay', Code: 'uy' },
    { Name: 'Uzbekistan', Code: 'uz' },
    { Name: 'Vanuatu', Code: 'vu' },
    { Name: 'Venezuela, Bolivarian Republic of', Code: 've' },
    { Name: 'Viet Nam', Code: 'vn' },
    { Name: 'Virgin Islands, British', Code: 'vg' },
    { Name: 'Virgin Islands, U.S.', Code: 'vi' },
    { Name: 'Wallis and Futuna', Code: 'wf' },
    { Name: 'Western Sahara', Code: 'eh' },
    { Name: 'Yemen', Code: 'ye' },
    { Name: 'Zambia', Code: 'zm' },
    { Name: 'Zimbabwe', Code: 'zw' }
  ])
