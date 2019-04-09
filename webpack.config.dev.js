import path from 'path';

module.exports = {
    mode: 'development',
    debug: true,
    target: 'web',
    noInfo: false,
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
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
};