/**
 * Created by Ma Ming on 2016/11/22.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map', //打包后的文件映射
    entry: {
        index: ['./src/index.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: "./src",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    externals: [
        {
            // 'angular': 'angular'
        }
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.tpl\.html|\.html$/,
                loader: 'html',
                exclude: /node_modules/,
                include: __dirname + '/src'
            },
            {
                test: /\.css$/,
                // 注意 loader 而不是 loaders
                loader: ExtractTextPlugin.extract('style', 'css'),
                includes: __dirname + '/src'
            },
            {
                test: /\.(png|jpeg|gif)$/,
                loaders: ['file', "url?limit=1024"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Eason',
            template: __dirname + '/src/index.html',
            inject: true,
        }),
        new ExtractTextPlugin('[name].css'),
        // 版权声明 。。基本没啥用
        new webpack.BannerPlugin("Copyright Ming.")
    ],
    resolve: {
        extensions: ['', '.js']
    }

}