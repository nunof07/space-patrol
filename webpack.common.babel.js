import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';
import os from 'os';
import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import babelLoader from './webpack.babel-loader';

module.exports = {
    entry: {
        main: './src/index.ts',
        vendor: ['ramda'],
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
                    enforce: true,
                },
            },
        },
        runtimeChunk: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'cache-loader',
                    },
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: os.cpus().length - 1,
                        },
                    },
                    babelLoader,
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            happyPackMode: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [new TsConfigPathsPlugin()],
    },
    plugins: [
        new HardSourceWebpackPlugin(),
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
        new ForkTsCheckerWebpackPlugin({
            tslint: true,
            watch: './src',
            workers:
                process.env.NODE_ENV === 'travis'
                    ? 2
                    : ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
            checkSyntacticErrors: true,
        }),
    ],
};
