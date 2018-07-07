const path = require('path');
const webpack = require('webpack');
const PLATFORMS = require('./platforms.js');
const ENVIRONMENTS = require('./environments.js');

const environmentPlugin = (config, platform, environment) => {
    let environmentConfig = {
        NODE_ENV: environment
        // DEBUG: true
    };

    if (platform === PLATFORMS.SKETCH) {
        // This plugin is already added to the plugins list by the @skpm/builder
    } else {
        config.plugins.push(
            new webpack.EnvironmentPlugin(environmentConfig)
        );
    }

    return config;
};

module.exports = environmentPlugin;
