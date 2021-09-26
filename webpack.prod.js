const path = require('path');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'font',
      include: 'allAssets',
      fileWhitelist: [/\.(woff2?)(\?.*)?$/i],
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'image',
      include: 'allAssets',
      fileWhitelist: [/\.webp/],
    }),
    new CleanWebpackPlugin(),
    // new HtmlCriticalWebpackPlugin({
    //   base: path.resolve(__dirname, 'build'),
    //   src: 'index.html',
    //   dest: 'index.html',
    //   inline: true,
    //   minify: true,
    //   extract: true,
    //   width: 375,
    //   height: 565,
    //   penthouse: {
    //     blockJSRequests: false,
    //   },
    // }),
    new Dotenv({
      path: './.env.production',
    }),
  ],
};
