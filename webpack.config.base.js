const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
  },
  module: {
    rules: [
      // use ATL loader for .ts & .tsx files
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
      {test: /\.svg$/, loader: 'svg-sprite-loader'},
      {
        oneOf: [
          {
            test: /\.global.scss$/,
            use: [
              process.env.NODE_ENV !== 'production' ? 'style-loader' :
                MiniCssExtractPlugin.loader,
              'css-loader',
              "sass-loader"
            ]
          },
          {
            // 开启 css modules
            test: /\.scss$/,
            use: [
              process.env.NODE_ENV !== 'production' ? 'style-loader' :
                MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: "[name]_[hash:base64:5]",
                }
              },
              "sass-loader"
            ]
          }
        ],
      },
      {test: /\.(png|jpg|gif)$/, loader: 'file-loader'}
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
    })
  ]
};
