const penthouse = require('penthouse');
// const path = require('path');
// const fs = require('fs');
// const postcss = require('postcss');
const logger = require('../shared/logger');

const minify = require('./minifycss');

// const cssString = fs.readFileSync(path.join(__dirname, '../static/css/bundle.css'), 'utf8');

const width = 1920;
const height = 1080;

module.exports = (cfg, cssString) => {
  penthouse({
    url: `http://localhost:3000${cfg.path}`,
    cssString,
    width,
    height,
    keepLargerMediaQueries: false,
    propertiesToRemove: [
      '(.*)transition(.*)',
      'cursor',
      'pointer-events',
      '(-webkit-)?tap-highlight-color',
      '(.*)user-select',
    ],
    timeout: 30000,
    pageLoadSkipTimeout: 0,
    strict: false,
    maxEmbeddedBase64Length: 1000,
    renderWaitTime: 100,
    blockJSRequests: true,
  })
    .then((criticalCss) => {
      const filename = `${cfg.css}.min.css`;
      minify(criticalCss, filename);
      // postcss([require('css-mqpacker')(), require('cssnano')({ preset: 'advanced' })])
      //   .process(criticalCss)
      //   .then((result) => {
      //     fs.writeFileSync(path.join(__dirname, `../static/css/${filename}`), result.css);
      //     logger.info(`Finish: ${filename}`);
      //   });
    })
    .catch((err) => {
      // console.log(err);
      logger.error(err);
    });
};
