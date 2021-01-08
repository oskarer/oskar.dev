const path = require('path');
const glob = require('glob-all');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin')
  .default;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

let BundleAnalyzerPlugin;
if (process.env.ANALYZE) {
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
}

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'oskar.dev',
      favicon: './src/images/favicon.ico',
      template: './src/index.html',
    }),
    new HTMLInlineCSSWebpackPlugin(),
    new CleanWebpackPlugin(),
    new PurgecssPlugin({
      paths: [...glob.sync('./src/**/**/*', { nodir: true })],
    }),
    new ImageminWebpWebpackPlugin(),
  ].concat(process.env.ANALYZE ? [new BundleAnalyzerPlugin()] : []),
  devServer: {
    contentBase: './build',
    hot: true,
  },
};
