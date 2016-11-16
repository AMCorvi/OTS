var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: {
        app: "./src/app.js"
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
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};