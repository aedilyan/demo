import path from 'path';
// import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMD5Hash from 'webpack-md5-hash';

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
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
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
          }
    }
};