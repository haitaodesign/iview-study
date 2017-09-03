const path = require('path');
const ExtractTestPlugin = require('extract-text-webpack-plugin');

var config={
    entry:{
        main:'./main'
    },
    output:{
        path:path.join(__dirname,'./dist'),
        publicPath:'/dist/', //写一个绝对地址到cdn上
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        css:ExtractTestPlugin.extract({     //注意使用extract方法
                            use:'css-loader',
                            fallback:'vue-style-loader'
                        })
                    }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/          // 这里是一个正则，注意不要加引号
            },
            {
                test:/\.css$/,
                use:ExtractTestPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })
            },
            {
                test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader:'url-loader?limit=1024'
            }
        ]
    },
    plugins:[
        new ExtractTestPlugin('main.css')
    ]
};

module.exports = config;