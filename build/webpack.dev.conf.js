const path = require('path');
const webpack = require('webpack');
const webpackBaseConf = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

module.exports = merge(webpackBaseConf, {
    mode: 'development',
    entry: {
        'wswui-examples': './examples/main.js',
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
    },
    module: {
        rules: [

        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                chunks: {
                    chunks: 'all',
                    minChunks: 2,
                    minSize: 0,
                    name: 'chunks'
                }
            }
        }
    },
    plugins: [
        //demo 
        new HtmlWebpackPlugin({
            template: './template/index.html',
            filename: 'index.html',
            hash: true,//防止缓存
            inject: true,
            chunks: ['chunks', 'wswui-examples'],
            minify: {
                multihtmlCache: true,// 解决多页打包的关键！
                minifyJS: true,
                minifyCSS: true,
                removeAttributeQuotes: true//压缩 去掉引号
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        index: 'index.html',
        historyApiFallback: true,
        disableHostCheck: true,
        host: "127.0.0.1",
        hot: true,
        hotOnly: true,
        inline: true,
        overlay: {
            warnings: true,
            errors: true
        },
        watchOptions: {
            ignored: /node_modules/
        }
    }

});