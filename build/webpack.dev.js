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
  devServer: {
    hot: true, // 它是热更新：只更新改变的组件或者模块，不会整体刷新页面
    open: false, // 是否自动打开浏览器
    proxy: { // 配置代理（只在本地开发有效，上线无效）
      "/": { // 这是请求接口中要替换的标识
        target: "http://10.201.82.118:8500", // 被替换的目标地址，即把 /api 替换成这个
        changeOrigin: true
      },
    }
  }
})