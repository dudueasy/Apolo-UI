const path = require('path');


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
        test: /\.s?[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {test: /\.(png|jpg|gif)$/, loader: 'file-loader'}
    ],
  },
}
;