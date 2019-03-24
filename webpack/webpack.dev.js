const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');


const config = {
  resolve: {
    extensions: ['.js', 'vue']
  },
  
  devtool: 'cheap-module-eval-source-map',
  
  devServer: {
    port: 4600,
    host: '0.0.0.0',
    overlay: {
      errors: true,
    },
    hot: true,
    historyApiFallback: {
      index: '/src/index.html'
    }
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = merge(baseWebpackConfig, config);