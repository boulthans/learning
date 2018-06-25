'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    resolve: {
        extensions: [
            '.js', '.ts', '.tsx'
        ]
    },
    entry: [
        './src/index.tsx'
    ],
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: [
                    '@babel/preset-env', 
                    '@babel/preset-react',
                    '@babel/preset-typescript'
                ]
                }
            }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'node_modules/honeycomb-web-toolkit/dist/honeycomb.css', to: 'assets/honeycomb.css' }
        ]),
        new HtmlWebpackPlugin({
            template: './dev/index.html'
        })
    ]
};