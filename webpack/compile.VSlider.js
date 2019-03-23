const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const config = {
  mode: 'production',
  target: 'web',
  entry: path.join(__dirname, '..', 'index.js'),
  output: {
    filename: 'iv-slider.js',
    path: path.join(__dirname, '..',  'lib'),
    library: "VSlider",
    libraryTarget: "umd"
  },
  
  // devtool: 'cheap-module-source-map',
  
  optimization: {
    splitChunks: {
      chunks: 'all',
      filename: '[name].bundle.js'
    }
  },
  
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: path.join(__dirname, '..',  'src'),
    }, {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].min.css'
    }),
    new CleanWebpackPlugin()
  ]
}

module.exports = config;