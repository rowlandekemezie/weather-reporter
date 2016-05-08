const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  inject: 'body',
  filname: 'index.html'
});
module.exports = {
  entry: [
    './app/index.js'
  ],
  devServer: {
    inline: true,
    port: 3333
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules | bower_components)/,
      loader: 'babel-loader'
    },
    { test: /\.css$/, loader: 'style-loader!css-loader' }
  ]
  },
  plugins: [htmlWebpackPluginConfig]
};
