// const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry:'./src/index',
  mode:'development',
  output:{
    path: path.resolve(__dirname, "dist"),
    filename:'asdass.bundle.js'
  },
  module: { // 操作模块
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }

}