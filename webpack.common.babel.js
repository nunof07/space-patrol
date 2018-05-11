import path from 'path';
//import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';
// import { TsConfigPathsPlugin } from 'awesome-typescript-loader';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
// import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
    entry: {
        main: './src/index.js',
        // vendor: [
        //     'phaser',
        //     'ramda',
        // ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true
                },
            }
        },
        runtimeChunk: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    // resolve: {
    //     extensions: ['.ts', '.js'],
    //     plugins: [
    //         new TsConfigPathsPlugin()
    //     ]
    // },
    plugins: [
        // new ForkTsCheckerWebpackPlugin({
        //     tslint: true,
        //     watch: './src',
        //     workers: process.env.NODE_ENV === 'travis' ? 2 : ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
        // }),
        // new HardSourceWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Space Patrol',
            hash: false,
            minify: {
                collapseWhitespace: false,
                preserveLineBreaks: true,
                removeScriptTypeAttributes: true,
            },
            inject: false,
            template: HtmlWebpackTemplate,
            appMountId: 'game',
            mobile: true,
        }),
        // new CopyWebpackPlugin(['assets' ], { cache: true }),
        // // vars used by Phaser
        // new webpack.DefinePlugin({
        //     'CANVAS_RENDERER': JSON.stringify(true),
        //     'WEBGL_RENDERER': JSON.stringify(true)
        // })
    ],
};
