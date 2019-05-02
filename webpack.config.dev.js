const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const devConfig = {
  mode: 'development',
  plugins: [
    // new HtmlWebpackPlugin({title: 'Custom template', template: './index.html'}),

    new HtmlWebpackPlugin({title: 'ApoloUI', template: 'index.html', favicon: 'favicon.ico'}),
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8888',
    contentBase: './dist/lib',
    hot: true,
  },
};


module.exports = Object.assign({},baseConfig, devConfig);
