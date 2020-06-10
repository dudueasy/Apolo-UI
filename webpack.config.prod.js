const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const path = require('path');

const productionConfig = {
  mode: 'production',
  entry: {
    ...baseConfig.entry,
    example: path.join(__dirname, './example.tsx'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ApoloUI',
      template: 'example.html',
      favicon: 'favicon.ico',
      filename: 'example.html'
    }),
  ],
  externals:
    {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
      },
    },
  devtool: 'none',
};

module.exports = Object.assign({}, baseConfig, productionConfig);
