module.exports = {
    loader: 'babel-loader',
    options: {
        babelrc: false,
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: ['>0.25%'],
                    },
                    forceAllTransforms: true,
                },
            ],
        ],
        plugins: ['@babel/plugin-transform-runtime'],
    },
};
