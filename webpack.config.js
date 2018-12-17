var path = require('path')

module.exports = {
  entry: './src/lib.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  }
}
