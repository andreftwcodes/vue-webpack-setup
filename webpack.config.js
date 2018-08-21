const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/app.js'
    },
    resolve: {
        alias: {
            '@': path.resolve('./src')
        },
        extensions: ['.js','.vue']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    devServer: {
        compress: true,
        overlay: true
    },
    mode: 'none',
    plugins: [
        new VueLoaderPlugin(),
        new UglifyJsPlugin()
    ]
}