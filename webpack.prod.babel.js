import CleanWebpackPlugin from 'clean-webpack-plugin';
import common from './webpack.common.babel';
import fs from 'fs';
import ImageminMozjpeg from 'imagemin-mozjpeg';
import ImageminWebpackPlugin from 'imagemin-webpack-plugin';
import LicenseBannerPlugin from 'license-banner-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';

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
            licenseDirectories: [path.join('node_modules')],
        }),
        new webpack.BannerPlugin(fs.readFileSync('./LICENSE', 'utf8')),
        new ImageminWebpackPlugin({
            gifsicle: { optimizationLevel: 3 },
            jpegtran: null,
            optipng: null,
            pngquant: {
                quality: '95-100',
            },
            plugins: [
                ImageminMozjpeg({
                    quality: 90,
                }),
            ],
        }),
    ],
});
