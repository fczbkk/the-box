module.exports = {

  entry: './src/index.js',

  output: {
    path: './lib/browser/',
    filename: 'index.js',
    library: 'TheBox',
    libraryTarget: 'umd'
  },

  module: {

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]

  }

};