import path from 'path';

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: path.resolve(__dirname, 'src')
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    plugins: [],
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' }
        ]
    }
};