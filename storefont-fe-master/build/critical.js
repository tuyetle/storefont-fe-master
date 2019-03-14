const path = require('path');
const fs = require('fs');

const genCSS = require('./genCSS');
const routes = require('./cssconfig');

const minify = require('./minifycss');

const cssString = fs.readFileSync(path.join(__dirname, '../static/css/bundle.css'), 'utf8');

minify(cssString, path.join(`bundle.min.css`));

routes.forEach((el) => {
  genCSS(el, cssString);
});
