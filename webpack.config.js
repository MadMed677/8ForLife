const path = require('path');
const webpack = require('webpack');
const JSDocPlugin = require('jsdoc-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
    entry: [
        'babel-regenerator-runtime',
        './src/js/main.js'
    ],

    output: {
        path: path.join(__dirname, 'static/js'),
        filename: 'app.js',
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

    devtool: NODE_ENV === 'development' ? 'eval' : null
};

if (process.env.HOT) {

}
