import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.config.common';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export default merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'static'),
        publicPath: '/'
    },
    devServer: {
        contentBase: './static',
        hot: true
    },
    plugins: [
        //Generate an external css file
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        })
    ]
});