import path from 'path';

export default {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: path.resolve(__dirname, 'src')
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/src'
    },
    plugins: [],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }] }
        ]
    }
};