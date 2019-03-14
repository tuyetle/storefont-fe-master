/* eslint-disable */
const fs = require('fs');
const trash = require('trash');
const webpack = require ('webpack');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const BabiliPlugin = require('babili-webpack-plugin');



module.exports = {
  webpack: (config, { dev, isServer }) => {
    config.plugins = config.plugins.filter(
      (plugin) => (plugin.constructor.name !== 'UglifyJsPlugin')
    )

    //css loadder
    config.module.rules.push(
      {
        test: /\.css$/,
        exclude: [/node_modules/, 'styles/global.css', 'styles/bootstrap.css'],
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext]'
            }
          },
          {
            loader: 'skeleton-loader',
            options: {
              procedure: function (content) {
                const fileName = `${this._module.userRequest}.json`
                const styles = fs.readFileSync(fileName, 'utf8')

                trash(fileName)

                return ['module.exports = {',
                  `styles: ${styles},`,
                  `stylesheet: \`${content}\``,
                  '}'
                ].join('')
              }
            }
          },
          { loader: 'postcss-loader',
            options: {
              config: {
                  path: './postcss.config.js'
              }
          }}
        ]
    }
    )

    if (!dev) {
      config.plugins.push(new LodashModuleReplacementPlugin());
      config.plugins.push(new webpack.IgnorePlugin(/redux-logger/));
      config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
      config.plugins.push(new BabiliPlugin());
    }

    //webpack analyze
    if (process.env.ANALYZE_BUILD) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true
        })
      );
    }

    return config;
  }
}
