const path = require('path')
const webpack = require('webpack')

module.exports = () => {
  const config = {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    devtool: 'inline-source-map'
  }

  if (process.env.NODE_ENV === 'production') {
    // config.output.filename: '[name].bundle.[hash].js'
    config.output.filename = 'bundle.min.js'
    config.devtool = 'source-map'
    config.plugins = (config.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ])
  }
  
  // test specific setups
  if (process.env.NODE_ENV === 'test') {
    // module.exports.externals = [require('webpack-node-externals')()]
    module.exports.devtool = 'eval'
  }
  
  return config
}
