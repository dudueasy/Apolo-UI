const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  mode: 'development',
  entry: {
    apoloUI: path.join(__dirname, './lib/index.tsx'),
  },
  output: {
    path: path.join(__dirname, './dist/lib'),
    library: 'apoloUI',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      // use ATL loader for .ts & .tsx files
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},

    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({title: 'Custom template', template: './index.html'}),

    new HtmlWebpackPlugin({title: 'ApoloUI', template: 'index.html'}),
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8888',
    contentBase: './dist/lib',
    hot: true,
  },
}
;