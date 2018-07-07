const webpackConfigTemplate = {
    entry: null,
    output: {},
    // devtool: "source-map", // any "source-map"-like devtool is possible
    module: {
        rules: [
            // {
            //     test: /\.styled$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: [
            //         {
            //             loader: 'babel-loader',
            //             options: babelLoaderOptions
            //         },
            //         './config/webpack/styled-loader.js'
            //     ]
            // },
            // {
            //     test: /\.s?css$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: [
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 sourceMap: false
            //             }
            //         }
            //     ]
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     sourceMap: true
            //                 }
            //             },
            //             {
            //                 loader: 'sass-loader',
            //                 options: {
            //                     sourceMap: true
            //                 }
            //             }
            //         ]
            //     })
            // },
            // {
            //     test: /Locales\/[^\/]+\.json$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: [
            //         {
            //             loader: 'babel-loader',
            //             options: babelLoaderOptions
            //         },
            //         './config/webpack/locale-loader.js'
            //     ]
            // }
        ]
    },

    resolve: {
        // alias: {
            // '~/Locales/xx_XX': '~/Locales/en_US.json',
            // '~': path.resolve(__dirname, 'src')
        // }
    //     extensions: [ '.js', '.jsx', '.json', '.scss' ]
    },

    plugins: [
        // new ExtractTextPlugin("[name].css"),
    ]
};

module.exports = webpackConfigTemplate;
