const path = require('path');
const PLATFORMS = require('./platforms.js');
const ENVIRONMENTS = require('./environments.js');
const babelLoaderOptions = require('./babelLoaderOptions.js');

const babelRule = (config, platform, environment) => {
    let rule = {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: babelLoaderOptions(platform, environment)
        }
    };

    if (platform === PLATFORMS.SKETCH) {
        // rule.exclude = /(node_modules|bower_components)/;
        config.module.rules[0] = rule;
    } else {
        config.module.rules.push(rule);
    }

    return config;
};

module.exports = babelRule;
