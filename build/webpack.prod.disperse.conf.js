const webpack = require('webpack');

const webpackBaseConf = require('./webpack.base.conf.js');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const entry = {};
const packages = ['Button','Loading','Popup','Swiper','Swiper-item','Tabs','Tab','Toast']
packages.map((item)=>{
    const cptName = item.toLowerCase();
    entry[cptName] = './packages/' + cptName + '/index.js';
});

const rimraf = require('rimraf');

rimraf('./lib/*', function (err) {
    if(err) console.log(err);
});


module.exports = merge(webpackBaseConf, {
    mode: 'production',
    devtool: 'source-map',
    entry,
    output: {
        path: path.resolve(__dirname, '../lib/'),
        publicPath: './assets/',
        filename: '[name]/index.js',
        library: '[name]',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true
    },
    externals: {
        'vue': {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/style.css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ],
    optimization: {
        minimize: false
    }
});
