Package.describe({
  name: 'alexche:endless-scroll',
  summary: 'Endless (infinite) scrolling subscription and jquery implementation',
  version: '1.1.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('endless-scroll.js');
  api.export('EndlessScroll');
});

