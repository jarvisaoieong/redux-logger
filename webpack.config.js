var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'index'),
  ],
  output: {
    library: process.env.LIBRARY_NAME,
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
