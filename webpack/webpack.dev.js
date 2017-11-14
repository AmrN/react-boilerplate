const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

// in production these are set via environment variables (by heroku config:set for example).
require('dotenv').config({ path: '.env.development' });

// we need to call this after setting up dotenv so that it can read our environment variables.
const common = require('./webpack.common')();

const rootPath = path.join(__dirname, '../');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  devtool: 'inline-source-map',
  // devtool: 'eval',
  devServer: {
    contentBase: path.join(rootPath, 'public'),
    historyApiFallback: true,
    publicPath: '/dist/',
  },
});

