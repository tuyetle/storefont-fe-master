const postcss = require('postcss');
const logger = require('../shared/logger');
const path = require('path');
const fs = require('fs');
// const cssString = fs.readFileSync(path.join(__dirname, '../static/css/bundle.css'), 'utf8');

module.exports = (cssString, filename) => {
  postcss([require('css-mqpacker')(), require('cssnano')({ preset: 'advanced' })])
    .process(cssString)
    .then((result) => {
      fs.writeFileSync(path.join(__dirname, `../static/css/${filename}`), result.css);
      logger.info(`Finish: ${filename}`);
    });
};
