const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    "webpack-dev-server/client?http://127.0.0.1:3030",
    "webpack/hot/only-dev-server",
    "./app",
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: '127.0.0.1',
    port: 3030,
    contentBase: [common.output.path, path.join(__dirname, 'public')],
    proxy: [{
      context: ['/api', '/go'],
      target: 'http://localhost:5566',
    }],
    hot: true,
  },
});
