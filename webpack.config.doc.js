const baseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

const productionConfig = {
  entry:{
    example: path.resolve(__dirname, './example.tsx')
  },
  mode: 'production',
  devtool:'none',
  plugins:[
    new HtmlWebpackPlugin({title: 'ApoloUI Demo', template: 'index.html', favicon: 'favicon.ico'}),
  ]
};

module.exports = Object.assign({},baseConfig, productionConfig);
