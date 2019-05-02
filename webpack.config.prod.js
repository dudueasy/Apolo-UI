const baseConfig = require('./webpack.config.base');

const productionConfig = {
  mode: 'production',
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
};

module.exports = Object.assign({},baseConfig, productionConfig);
