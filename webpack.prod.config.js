const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig,{
    output:{
        publicPath:'/dist/',
        filename:'[name].[hash].js'
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename:'[name].[hash].css',
            allChunks:true
        }),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        new HtmlWebpackPlugin({
            filename:'../dist/index_prod.html',
            template:'./index.ejs',
            inject:false
        })
    ]
});