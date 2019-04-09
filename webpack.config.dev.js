import path from 'path';

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
        utils: path.resolve(__dirname, 'src/utils.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [],
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' }
        ]
    }
};