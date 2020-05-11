

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const ProgressBarPlugin = require('progress-bar-webpack-plugin');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const isDev = process.env.NODE_ENV === 'development';
var test = process.env.NODE_ENV === 'test';


const chalk= require('chalk');
module.exports = {
    stats: {
        entrypoints: false,
        children: false
    },
    stats: 'errors-only',
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [
            !test ? {
                test: /\.(sa|sc|c)ss$/,
                use: [                    
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                    }
                ],
            }:{},
            {
                test: /\.svg$/,
                use: 'raw-loader'
            },
            {
                test: /\.vue$/,
                use: [
                    // 'cache-loader',
                    {
                        loader: 'vue-loader',
                        options: {
                           /*  preLoaders: {
                               js: 'istanbul-instrumenter-loader?esModules=true'
                            }, */
                            loaders: {
                                sass: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
                            }
                            
                        }
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }, 
            {
                test: /\.(png|jpg|gif|webp)$/,
                loader: 'url-loader',
                options: {
                    limit: 3000,
                    name: 'img/[name].[ext]',
                }
            },]
    },
    plugins: [       
        new VueLoaderPlugin(),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',      
            clear: false, 
            width: 100
        }),
        new WebpackBuildNotifierPlugin({
            title: "SwUI Webpack Build",        
            suppressSuccess: true,
        })
    ],
}