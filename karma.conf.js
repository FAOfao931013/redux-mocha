var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: [ 'Chrome' ], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: [ 'mocha' ], //use the mocha test framework
        files: [
            'src/**/test/*.js' //just load this file
        ],
        preprocessors: {
            'src/Test/test/testActions.js': [ 'webpack' ] //preprocess with webpack and our sourcemap loader
        },
        coverageReporter: {
            instrumenters: { 'istanbul-react' : require('istanbul-react') },
            instrumenter: {
                'src/**/test/*.jsx': 'istanbul-react'
            }
            // ...
        },
        reporters: [ 'dots' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader' }
                ]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};
