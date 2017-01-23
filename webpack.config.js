const path = require('path');
const webpack = require('webpack');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Webpack Constants
 */
const ENV = ( process.env.NODE_ENV || 'development' );
const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

const METADATA = {
    baseUrl: '/',
    lang: 'en',
    title: 'Tombaugh Regio',
    ENV: JSON.stringify( ENV ),
    host: '0.0.0.0',
    // port is determined from npm config
    // which is set in package.json
    // "config": {
    //    "port": "9000"
    // }
    port: process.env.npm_package_config_port || 9000
};

const webpackConfigEntryPoints = {
    polyfills: path.resolve( ROOT, 'polyfills.ts' ),
    vendor: path.resolve( ROOT, 'vendor.ts' ),
    main: path.resolve( ROOT, 'main.ts' )
};

const webpackNode = {
    global: 'window',
    process: true,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
};


const tslintConfig = {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
};

const webpackConfigRules = [
    {
        enforce: "pre",
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: [ /node_modules/ ]
    },
    {
        test: /\.(ts|js)$/,
        exclude: [ /node_modules/ ],
        use: 'awesome-typescript-loader'
    }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: ["css-loader", "less-loader"]
        })
    }, {
        test: /\.html$/,
        use: 'raw-loader'
    }
];

const webpackConfigPlugins = [
    new DefinePlugin({
        ENV: METADATA.ENV,
        'process.env': {
            ENV: METADATA.ENV,
            NODE_ENV: METADATA.ENV
        }
    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: [ 'vendor', 'polyfills' ]
    }),

    new HtmlWebpackPlugin({
        template: path.resolve( ROOT, 'index.html' ),
        chunksSortMode: 'dependency'
    }),

    new ExtractTextPlugin({
        filename: "[name].css"
    }),

    new LoaderOptionsPlugin({
        options: {
            tslint: tslintConfig
        }
    })
];

module.exports = {
    entry: webpackConfigEntryPoints,

    output: {
        path: DESTINATION,
        filename: '[name].js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [ROOT, 'node_modules']
    },
    devtool: '#cheap-module-source-map',

    module: {
        rules: webpackConfigRules
    },
    plugins: webpackConfigPlugins,
    // node: webpackNode,
    devServer: {
        // This is required for webpack-dev-server. The path should
        // be an absolute path to your build destination.
        outputPath: DESTINATION
    }
};