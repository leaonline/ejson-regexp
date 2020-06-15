/* eslint-env standard */
Package.describe({
  name: 'leaonline:ejson-regexp',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'Add RegEx as EJSON type',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:leaonline/ejson-regexp.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.6')
  api.use('ecmascript')
  api.use('ejson')
  api.addFiles('ejson-regex.js')
})
