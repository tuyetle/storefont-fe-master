const path = require('path');

const plugins = [
  require('postcss-import')({ path: ['styles'] }),
  require('postcss-url')({ url: 'copy', basePath: path.resolve('static/assets'), assetsPath: 'static/assets' }),
  require('postcss-advanced-variables'),
  require('postcss-image-set-polyfill'),
  require('postcss-initial'),
  require('postcss-cssnext')(),
  require('postcss-utilities'),
  require('postcss-nested'),
  require('postcss-modules')({
    generateScopedName: '[name]-[local]',
    globalModulePaths: ['styles/global.css'],
  }),
  // require('css-mqpacker')(),
  // require('cssnano')({ preset: 'advanced' }),
];
// if (process.env.NODE_ENV === 'production') {
//   plugins.push(require('css-mqpacker')(), require('cssnano')({ preset: 'advanced' }));
// }

module.exports = {
  plugins,
};
