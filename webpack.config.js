var webpack = require("webpack");
var path = require("path");
var autoprefixer = require('autoprefixer')

module.exports = {
    entry: {
        app: "./src/client.js"
    },
    output: {
        path: 'build',
        filename: "bundle.js",
        sourceMapFilename: "./build/bundle.js.map"
    },
    devServer: {
        inline: true,
        contentBase: './build',
        port: 3005
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
            test: /\.js?$/,
            exclude: /(node_modules|bower_component)/ ,  
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=20000'
            },
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            }
        ]
    },
     postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]

};