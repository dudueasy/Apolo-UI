const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const path = require('path')

const devConfig = {
  mode: 'development',
  entry: {
    example: path.join(__dirname, './example.tsx'),
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'ApoloUI', template: 'example.html', favicon: 'favicon.ico'}),
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8888',
    contentBase: './dist/lib',
    hot: true,
  },
};


module.exports = Object.assign({},baseConfig, devConfig);
