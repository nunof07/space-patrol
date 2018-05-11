import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import LicenseBannerPlugin from 'license-banner-webpack-plugin';
import common from './webpack.common.babel';


export default merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new LicenseBannerPlugin({
            licenseDirectories: [
                path.join('node_modules')
            ]
        }),
        new webpack.BannerPlugin(fs.readFileSync('./LICENSE', 'utf8')),
    ],
});