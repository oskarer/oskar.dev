const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

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
    new Dotenv({
      path: './.env.production',
    }),
  ],
};
