'use strict';

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
    },
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    module: {
        // Extract CSS
        loaders: [{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?outputStyle=expanded')
        }]
    },
    postcss: [autoprefixer({ browsers: ['last 3 versions'] })],
    plugins: [
        new ExtractTextPlugin('../css/[name].css')
    ]
};
