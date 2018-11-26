Package.describe({
  name: 'panter:fiber-dictionary',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary:
    'a key value store that can be used as singleton, but stores its values per fiber',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/panter/meteor-fiber-dictionary',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.8');
  api.use('ecmascript');
  api.mainModule('fiber-dictionary.js', 'server');
});
