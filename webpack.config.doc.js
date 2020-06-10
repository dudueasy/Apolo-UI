const baseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// 输出示例官网
const docConfig = {
  output:{
    path: path.resolve(__dirname, './doc/lib'),
  },
  entry: {
    example: path.resolve(__dirname, './example.tsx'),
  },
  mode: 'production',
  devtool: 'none',
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'ApoloUI Demo',
        template: 'example.html',
        favicon: 'favicon.ico',
        fileName: 'example.html'
      },
    ),
  ],
};

module.exports = Object.assign({}, baseConfig, docConfig);
