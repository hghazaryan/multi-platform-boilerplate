const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PLATFORMS = require('./platforms.js');
const ENVIRONMENTS = require('./environments.js');

const uglifyPlugin = (config, platform, environment) => {
    let uglifyConfig = {
            // test: /\.js$/,
            sourceMap: true,
            // parallel: true
            uglifyOptions: {
                ie8: false,
                ecma: 8,
                compress: {
                    dead_code: true,
                    unused: true
                },
                mangle: {
                    // Works around a Safari 10 bug:
                    // https://github.com/mishoo/UglifyJS2/issues/1753
                    safari10: true
                }
            }
        };


    if (platform === PLATFORMS.SKETCH) {
        // This plugin is already added to the plugins list by the @skpm/builder
    }
    else if (
        environment === ENVIRONMENTS.PRODUCTION &&
        (
            platform === PLATFORMS.WEB ||
            platform === PLATFORMS.WEB_ES5 ||
            platform === PLATFORMS.SERVER
        )
       ) {
        config.plugins.push(
            new UglifyJSPlugin(uglifyConfig)
        );
    }

    return config;
};

module.exports = uglifyPlugin;
