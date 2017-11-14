const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

require('dotenv').config({ path: '.env.development' });
const common = require('./webpack.common')();

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
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/dist/',
  },
});

