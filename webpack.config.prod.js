import merge from 'webpack-merge';
import common from './webpack.config.common';
import WebpackMD5Hash from 'webpack-md5-hash';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash].js',
        path: __dirname + '/dist'
    },
    plugins: [
        //Generate an external css file
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        //hash the file using MD5 so that their name change when the code changes
        new WebpackMD5Hash()
    ],
    optimization: {
        minimize: true,
        //to create separate bundle of libraries so that they are cached separately.
        splitChunks: {
            chunks: 'async',
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                libs: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        },
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    }
});