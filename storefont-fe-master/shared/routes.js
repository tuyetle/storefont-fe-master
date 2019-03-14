

const nextRoutes = require('next-routes');

const routes = nextRoutes();
routes
  .add('search-result', '/search-result', 'search-result')
  .add('forgot-password', '/forgot-password', 'forgot-password');


module.exports = routes;
