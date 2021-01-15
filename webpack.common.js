const path = require('path');
const glob = require('glob-all');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

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
        test: /\.(png|webp|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
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
    new HtmlWebpackPlugin({
      title: 'oskar.dev',
      favicon: './src/images/favicon.ico',
      template: './src/index.html',
      scriptLoading: 'defer',
      // chunks: ['main'],
    }),
    new MiniCssExtractPlugin(),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'script',
      include: ['vendors~age', 'vendors~emojione', 'age', 'emojione'],
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'font',
      include: 'allAssets',
      fileWhitelist: [/\.(woff2?)(\?.*)?$/i],
    }),
    new CleanWebpackPlugin(),
    new PurgecssPlugin({
      paths: [...glob.sync('./src/**/**/*', { nodir: true })],
    }),
  ].concat(process.env.ANALYZE ? [new BundleAnalyzerPlugin()] : []),
  devServer: {
    contentBase: './build',
    hot: true,
  },
};
