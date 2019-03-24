const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');


const config = {
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.join(__dirname, '..',  'dist')
  },
  
  devtool: 'cheap-module-source-map',
  
  optimization: {
    splitChunks: {
      chunks: 'all',
      filename: '[name].bundle.js'
    }
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }, {
      test: /\.less$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
    }]
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css'
    }),
    new CleanWebpackPlugin()
  ]
}

module.exports = merge(baseWebpackConfig, config);