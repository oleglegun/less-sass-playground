'use strict';

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractLESS = new ExtractTextPlugin('/less/[name].css');
var extractSCSS = new ExtractTextPlugin('./scss/[name].css');


module.exports = {
    entry: {
        nested_less: './src/less/nested.less',
        nested_sass: './src/sass/nested.scss',

        extend_less: './src/less/extend.less',
        extend_sass: './src/sass/extend.scss',

        variables_use_less: './src/less/variables_use.less',
        variables_use_sass: './src/sass/variables_use.scss',

        math_less: './src/less/math.less',
        math_sass: './src/sass/math.scss',

        mixins_basic_less: './src/less/mixins-basic.less',
        mixins_basic_sass: './src/sass/mixins-basic.scss',

        mixins_advanced_less: './src/less/mixins-advanced.less'
    },
    output: {
        path: './assets',
        filename: 'app.js'
    },
    module: {
        // Extract CSS
        loaders: [{
            test: /\.less$/,
            loader: extractLESS.extract('style', 'css!postcss!less')
        }, {
            test: /\.scss$/,
            loader: extractSCSS.extract('style', 'css!postcss!sass?outputStyle=expanded')
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file?name=./[name].[ext]&emitFile=false'
        }]
    },
    postcss: [autoprefixer({ browsers: ['last 3 versions'] })],
    plugins: [
        extractLESS,
        extractSCSS
    ]
};
