const path = require('path');
const util = require('util');
const webpack = require('webpack');

const PLATFORMS = require('./config/platforms.js');
const ENVIRONMENTS = require('./config/environments.js');
const webpackConfig = require('./config/webpackConfig.js');
const webpackConfigTemplate = require('./config/webpackConfigTemplate.js');


module.exports = env => {
    const PLATFORM = env.platform;
    const ENVIRONMENT = env.production ? ENVIRONMENTS.PRODUCTION : ENVIRONMENTS.DEVELOPMENT;

    return webpackConfig(webpackConfigTemplate, PLATFORM, ENVIRONMENT);
};
