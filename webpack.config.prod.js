import path from 'path';
//import webpack from 'webpack';

export default {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: path.resolve(__dirname, 'dist')
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
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }] }
        ]
    },
    optimization: {
        minimize: true
    }
};