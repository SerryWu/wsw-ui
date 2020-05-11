const path = require('path');
const webpackBaseConf = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

module.exports = merge(webpackBaseConf, {
    mode: 'production',
    entry: {
        'wswui-examples': './examples/main.js',
    },
    output: {
        publicPath: './',
        path: path.resolve(__dirname, '../doc/'),
        filename: 'index.js',
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
        })
    ],
    devtool: 'cheap-module-source-map',
});