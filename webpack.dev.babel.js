import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanTerminalPlugin from 'clean-terminal-webpack-plugin';
import common from './webpack.common.babel';

export default merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        overlay: true,
        hot: true,
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanTerminalPlugin(),
    ],
});