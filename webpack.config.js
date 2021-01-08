const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

module.exports = ({ env }) => {
  const config = env === 'dev' ? devConfig : prodConfig;
  return webpackMerge(commonConfig, config);
};
