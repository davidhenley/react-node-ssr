const path = require('path');

module.exports = {
  // Tell webpack the root file of our
  // server application
  entry: './src/client/client.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
}