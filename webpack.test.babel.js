import path from 'path';
import nodeExternals from 'webpack-node-externals';
import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import babelLoader from './webpack.babel-loader';

const isCoverage = process.env.NODE_ENV === 'coverage';

export default {
    mode: 'none',
    output: {
        // use absolute paths in sourcemaps (important for debugging via IDE)
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate:
            '[absolute-resource-path]?[hash]',
    },
    target: 'node',
    externals: [nodeExternals()], // ignore all modules in node_modules folder
    devtool: 'inline-cheap-module-source-map',
    module: {
        rules: [].concat(
            isCoverage
                ? [
                      {
                          test: /\.ts$/,
                          include: path.resolve(__dirname, 'src'),
                          exclude: /node_modules|\.spec\.ts$/,
                          use: {
                              loader: 'istanbul-instrumenter-loader',
                              options: { esModules: true },
                          },
                          enforce: 'post',
                      },
                  ]
                : [],
            {
                test: /\.css$/,
                use: ['null-loader'],
            },
            {
                test: /\.ts$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'test'),
                ],
                exclude: /node_modules/,
                use: [
                    babelLoader,
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            }
        ),
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [new TsConfigPathsPlugin()],
    },
};
