const path              = require('path');
const webpack           = require('webpack');
const WebpackStrip      = require('webpack-strip');
const JSDocPlugin       = require('jsdoc-webpack-plugin');

const NODE_ENV          = process.env.NODE_ENV || 'development';

const config = {

    entry: [
        'babel-regenerator-runtime',
        './src/js/app/app.react.js'
    ],

    output: {
        path: path.join(__dirname, 'static/js'),
        filename: 'main.js',
        publicPath: '/static/js/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        proxy: [{
            path: '/api/**',
            target: 'http://localhost:8000'
        }],
        port: '1111',
        historyApiFallback: true
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new JSDocPlugin({
            conf: './jsdoc.conf'
        })
    ],

    resolve: {
        root: [
            path.resolve('./src/js/engine/modules')
        ]
    },

    devtool: NODE_ENV === 'development' ? 'eval' : null

};

// Hot loader
if (process.env.HOT) {
    config.devtool = 'eval'; // Speed up incremental builds
    config.output.publicPath = 'http://localhost:1111/';
    config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
    config.module.loaders[0].query.plugins.push('react-transform');
    config.module.loaders[0].query.extra = {
        'react-transform': [{
            target: 'react-transform-hmr',
            imports: ['react'],
            locals: ['module']
        }]
    };
}

// Production config
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.module.loaders.push({
        test: /.js$/,
        loader: WebpackStrip.loader('console.log', 'console.error')
    });
}

module.exports = config;
