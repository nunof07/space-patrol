module.exports = {
    loader: 'babel-loader',
    options: {
        babelrc: false,
        presets: [
            [
                'env',
                {
                    targets: {
                        browsers: ['>0.25%'],
                    },
                },
            ],
        ],
        plugins: ['transform-runtime'],
    },
};
