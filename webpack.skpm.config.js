const path = require('path');
const util = require('util');
const webpack = require('webpack');

const PLATFORMS = require('./config/platforms.js');
const ENVIRONMENTS = require('./config/environments.js');
const webpackConfig = require('./config/webpackConfig.js');

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 * Default Config: node_modules/@skpm/builder/lib/utils/webpackConfig.js
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - wether the config is for a plugin command or a resource
 **/
module.exports = (config, isPluginCommand) => {
    const platform = PLATFORMS.SKETCH;
    const environment = ENVIRONMENTS.DEVELOPMENT;

    config = webpackConfig(config, platform, environment);
};
