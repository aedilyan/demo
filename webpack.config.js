const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'index.js'),        
        utils: path.resolve(__dirname, 'src/utils.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
};