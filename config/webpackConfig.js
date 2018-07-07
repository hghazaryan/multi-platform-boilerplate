const path = require('path');
const util = require('util');
const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const packageJSON = require('./package.json');
const PLATFORMS = require('./platforms.js');
const ENVIRONMENTS = require('./environments.js');
const entry = require('./entry.js');
const output = require('./output.js');
const resolve = require('./resolve.js');
const babelLoaderOptions = require('./babelLoaderOptions.js');
const babelRule = require('./babelRule.js');
const svgRule = require('./svgRule.js');
const uglifyPlugin = require('./uglifyPlugin.js');
const environmentPlugin = require('./environmentPlugin.js');
const providePlugin = require('./providePlugin.js');
const definePlugin = require('./definePlugin.js');

// const extractSass = new ExtractTextPlugin({
//     filename: "[name].css",
//     disable: true //process.env.NODE_ENV === "development"
// });

// const browserslist = packageJSON.browserslist;


const webpackConfig = (config, platform, environment) => {
    config = entry(config, platform, environment);
    config = output(config, platform, environment);
    config = resolve(config, platform, environment);

    if (platform === PLATFORMS.SERVER) {
        config.target = 'node';
        config.node = {
            console: false,
            global: false,
            process: false,
            Buffer: false,
            __filename: false,
            __dirname: false
        };
        config.externals = webpackNodeExternals();
    }

    config = babelRule(config, platform, environment);
    config = svgRule(config, platform, environment);

    config = environmentPlugin(config, platform, environment);
    config = providePlugin(config, platform, environment);
    config = definePlugin(config, platform, environment);
    config = uglifyPlugin(config, platform, environment);

    console.log(util.inspect(config, {showHidden: false, depth: null}));

    return config;
};

module.exports = webpackConfig;
