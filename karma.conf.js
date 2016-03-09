module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine'
    ],
    files: [
      'src/**/*.spec.js'
    ],
    reporters: [
      'coverage',
      'mocha'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'PhantomJS'
    ],
    singleRun: false,
    preprocessors: {
      'src/**/*.js': [
        'webpack',
        'coverage'
      ]
    },
    coverageReporter: {
      type: 'html',
      dir: 'temp/coverage/'
    },
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader'
          }
        ]
      },
      devtool: 'source-map'
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};