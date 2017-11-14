const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {
  const rootPath = path.join(__dirname, '../');

  const definitions = {
    'process.env': {
      FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
      FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      FIREBASE_DATABASE_URL: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
    },
  };

  return {
    entry: [
      'babel-polyfill',
      path.join(rootPath, 'src', 'app.js'),
    ],
    output: {
      path: path.join(rootPath, 'public', 'dist'),
      publicPath: '/dist/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                // publicPath: '/images',
                outputPath: 'images/',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(['public'], {
        root: rootPath,
        exclude: ['index.html'],
      }),
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: path.join(rootPath, 'src', 'index.html'),
        favicon: path.join(rootPath, 'src', 'images', 'favicon.png'),
        alwaysWriteToDisk: true,
        hash: true,
      }),
      // necessary to work with dev-server
      new HtmlWebpackHarddiskPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin(definitions),
    ],
  };
};
