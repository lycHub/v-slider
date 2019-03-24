const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  target: 'web',
  entry: path.join(__dirname, '..', 'src/main.js'),
  
  
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: path.join(__dirname, '..',  'src')
    }, {
      test: /\.css$/,
      use: ['vue-style-loader', 'css-loader']
    }, {
      test: /\.(gif|jpg|jpeg|png|svg|ttf|woff)$/,
      loader: 'url-loader'
    }]
  },
  plugins: [
    new HTMLPlugin({
      template: 'src/index.html',
      minify: {
        collapseInlineTagWhitespace: !isDev
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin()
  ]
};