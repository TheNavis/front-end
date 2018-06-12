const { resolve } = require('path');
const vendor = require('./vendor');
const rules = require('./rules');
const plugins = require('./plugins');
const devServer = require('./dev_server');
const devtool = require('./devtool');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const settings = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  context: resolve(__dirname, '..'),
  entry: {
    app: [
      'react-hot-loader/patch',
      'babel-polyfill',
      './src/index'
    ],
    vendor,
  },
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules,
  },
  plugins,
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            warnings: false,
            ie8: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  devServer,
  devtool,
};

module.exports = settings;