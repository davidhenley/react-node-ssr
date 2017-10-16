const path = require('path');

module.exports = {
  // Inform webpack that we are building a bundle
  // for Node.JS, rather than the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  // Tell webpack to run babel on every file
  // it runs through
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}