const path = require('path');
const PLATFORMS = require('./platforms.js');
const ENVIRONMENTS = require('./environments.js');
const babelLoaderOptions = require('./babelLoaderOptions.js');

const svgRule = (config, platform, environment) => {
    let rule = {
        test: /\.svg$/,
        exclude: /(node_modules|bower_components)/,
        use: [
            {
                loader: 'babel-loader',
                options: babelLoaderOptions(platform, environment)
            },
            {
                loader: path.resolve(__dirname, 'webpack/svg-to-jsx-loader.js'),
                options: {
                    platform: platform
                }
            }
        ]
    };

    if (platform === PLATFORMS.SKETCH) {
        // rule.exclude = /(node_modules|bower_components)/;
        config.module.rules.push(rule);
        config.module.rules[1].test = /^(?!.*\.(jsx?|tsx?|json|svg)$).*/;
    } else {
        config.module.rules.push(rule);
    }

    return config;
};

module.exports = svgRule;
