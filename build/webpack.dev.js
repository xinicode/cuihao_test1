const path = require('path');
const WebpackMerge = require('webpack-merge')
const common = require('./webpack.base');

module.exports = WebpackMerge.merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8090,
    hot: true
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {},
})