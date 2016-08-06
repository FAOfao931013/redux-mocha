var styleLintPlugin = require('stylelint-webpack-plugin');
var WebpackConfig = require('webpack-config');
var path = require('path');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var paths = {
    src:path.join(__dirname, '../src'),
    components: path.join(__dirname, '../src/components'),
    store: path.join(__dirname, '../src/store'),
    reducers: path.join(__dirname, '../src/reducers'),
    routes: path.join(__dirname, '../src/routes')
};

var config = {
    entry: {
        entry: [hotMiddlewareScript, path.join(__dirname, '../src/entry.js')]
    },

    devtool: '#source-map',

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        clearBeforeBuild: true,
        publicPath: '/static/'
    },

    module: {
        loaders: [
            // jsx
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /(node_modules)/
            },
            //js
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/
            },
            // less
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'src': paths.src,
            'components': paths.components,
            'store': paths.store,
            'reducers': paths.reducers,
            'routes': paths.routes
        }
    },
    plugins: [
        //new styleLintPlugin({
        //    configFile: '.stylelintrc',
        //    syntax: 'less',
        //    files: '../src/components/**/*.less'
        //})
    ]
};

module.exports = new WebpackConfig.Config().merge(config);

