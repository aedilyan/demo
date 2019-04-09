import path from 'path';

module.exports = {
    // mode: 'development',
    // devtool: 'inline-source-map',
    // entry: {
    //     app: path.resolve(__dirname, 'src/index.js'),
    //     utils: path.resolve(__dirname, 'src/utils.js'),
    // },
    // output: {
    //     filename: '[name].js',
    //     path: __dirname + '/dist'
    // },
    // plugins: [],
    // module: {
    //     rules: [
    //         { test: /\.css$/, use: 'css-loader' }
    //     ]
    // }
    devtool: 'inline-source-map',
 mode: 'development',
 entry: [
   'eventsource-polyfill', // necessary for hot reloading with IE
   'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
   path.resolve(__dirname, 'src')
 ],
 target: 'web',
 output: {
   path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
   publicPath: '/',
   filename: 'bundle.js'
 },
 devServer: {
   contentBase: path.resolve(__dirname, 'src')
 },
 plugins: [
   
 ],
 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
         options: {
           cacheDirectory: true
         }
       }
     },
    
     {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
     {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
     {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
     {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
   ]
 }
};