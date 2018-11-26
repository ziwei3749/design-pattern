const path = require( 'path' )
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: './index.html'
        })
    ],
    devServer: {
        contentBase: path.join( __dirname, './release' ), // 这个node服务器，肯定有根目录吧，这个就是说release是根目录
        open: true, // 自动打开浏览器
        port : 9000
    }
}