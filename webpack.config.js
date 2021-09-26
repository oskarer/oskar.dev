const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

module.exports = ({ dev }) => {
  const config = dev ? devConfig : prodConfig;
  return merge(commonConfig, config);
};
