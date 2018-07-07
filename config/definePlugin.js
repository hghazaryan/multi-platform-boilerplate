const path = require('path');
const webpack = require('webpack');
const PLATFORMS = require('./platforms.js');
const ENVIRONMENTS = require('./environments.js');

const packageJSON = require('../package.json');

const definePlugin = (config, platform, environment) => {
    let definePluginConfig = {};

    if (platform === PLATFORMS.SKETCH) {
        definePluginConfig['SKETCH_PLUGIN_NAME'] = JSON.stringify(packageJSON.skpm.name);
    }

    config.plugins.push(
        new webpack.DefinePlugin(definePluginConfig)
    );

    return config;
};

module.exports = definePlugin;
