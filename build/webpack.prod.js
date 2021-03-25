const path = require('path');
const WebpackMerge = require('webpack-merge');
const common = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssertsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = WebpackMerge.merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist/build')
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})