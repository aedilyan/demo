import path from 'path';
//import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        app: path.resolve(__dirname, 'src/index')
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    plugins: [
        //Eliminate duplicate packages
       // new webpack.optimize.DedupePlugin(),
        //Minify JS
       // new webpack.optimize.UglifyJsPlugin()
       new HtmlWebpackPlugin({
           template: './src/index.html',
           inject: true
       })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.html$/, loader: 'html-loader', options:{minimize: true} },
            { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }] }
        ]
    },
    optimization: {
        minimize: true
    }
};