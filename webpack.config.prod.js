import path from 'path';
// import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMD5Hash from 'webpack-md5-hash';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        libs: path.resolve(__dirname, 'src/libs'),
        main: path.resolve(__dirname, 'src/index')
    },
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
        new WebpackMD5Hash(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'head',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [{
                  loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
                }, {
                  loader: 'css-loader' // translates CSS into CommonJS
                }, {
                  loader: 'less-loader' // compiles Less to CSS
                }]
              }
        ]
    },
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
};