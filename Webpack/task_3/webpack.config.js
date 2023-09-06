const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      header: path.resolve(__dirname, './modules/header.js'),
      body: path.resolve(__dirname, './modules/body.js'),
      footer: path.resolve(__dirname, './modules/footer.js')
  },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].bundle.js',
      assetModuleFilename: '[name][ext]',
    },
    devServer: {
        static: path.join(__dirname, 'public'), // Serve content from the 'public' directory
        port: 8564, // Set the port to 8564
        open: true, // Automatically open in the default browser
    },
    module: {
      rules: [
          // Existing rules (if any)...

          // Adding rule for processing CSS files
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader', 'image-webpack-loader', 'file-loader']
          },

          // Adding rule for processing image files
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
          },
      ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
    new CleanWebpackPlugin()
  ],
};
