const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
      static: path.join(__dirname, 'public'),
      compress: true,
      port: 8564,
    },
    entry: {
      header: './modules/header.js',
      body: './modules/body.js',
      footer: './modules/footer.js',
  },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].bundle.js',
      assetModuleFilename: '[name][ext]',
    },
    module: {
      rules: [
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader', 'image-webpack-loader', 'file-loader']
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
          },
      ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
