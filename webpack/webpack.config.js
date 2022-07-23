const path = require('path');

module.exports = {
  mode: 'development',
  entry: './dev/input.js',
  output: {
    path: __dirname + '/dev',
    filename: 'output.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('./dist/loader.js'),
          }
        ]
      }
    ]
  }
};