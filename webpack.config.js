// 使用path
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 配置入口文件
  entry: "./src/index.js",
  // 配置出口文件
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[hash].js"
  },
  // module 模块
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: [path.join(__dirname, '/src')], // 现在babel转换文件夹
      use: {
        loader: 'babel-loader?cacheDirectory', // 启动缓存机制
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            importLoaders: 1,
            localIdentName: '[local]_[hash:base64]',
            minimize: true
          }
        }
      ] // 注意加载顺序。从数组中最后一项加载
    }]
  },
  // plugins 插件集合
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true,
      filename: './index.html'
    })
  ]
};
