const path = require('path');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'build'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 375,
      height: 565,
      penthouse: {
        blockJSRequests: false,
      },
    }),
    new Dotenv({
      path: './.env.production',
    }),
  ],
};
