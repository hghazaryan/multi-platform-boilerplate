const path = require('path');
const webpack = require('webpack');
const PLATFORMS = require('./platforms.js');
const ENVIRONMENTS = require('./environments.js');

const providePlugin = (config, platform, environment) => {
    let providePluginConfig = {
        // global: ['~/Utils/global.js', 'default'],
        '_.isArray': ['lodash/isArray'],
        '_.isBoolean': ['lodash/isBoolean'],
        '_.isUndefined': ['lodash/isUndefined'],
        '_.isNull': ['lodash/isNull'],
        '_.isString': ['lodash/isString'],
        '_.isObject': ['lodash/isObject'],
        '_.isEmpty': ['lodash/isEmpty'],
        '_.get': ['lodash/get'],
        '_.set': ['lodash/set'],
        '_.has': ['lodash/has'],
        '_.keys': ['lodash/keys'],
        '_.values': ['lodash/values']
    };

    if (platform === PLATFORMS.SKETCH) {
        providePluginConfig['Image'] = ['react-primitives/index.js', 'Image'];
        providePluginConfig['View'] = ['react-primitives/index.js', 'View'];
        providePluginConfig['Text'] = ['react-primitives/index.js', 'Text'];
        providePluginConfig['StyleSheet'] = ['react-primitives/index.js', 'StyleSheet'];
        // providePluginConfig['Svg'] = ['react-sketchapp/lib/index.js', 'Svg'];

        // providePluginConfig['console'] = 'sketch-polyfill-console/lib/index.js';
        // providePluginConfig['fetch'] = 'sketch-polyfill-fetch/lib/index.js';
        // providePluginConfig['setTimeout'] = [
        //     'sketch-polyfill-settimeout/lib/index.js',
        //     'setTimeout'
        // ];
        // providePluginConfig['clearTimeout'] = [
        //     'sketch-polyfill-settimeout/lib/index.js',
        //     'clearTimeout'
        // ];
        // providePluginConfig['setImmediate'] = [
        //     'sketch-polyfill-settimeout/lib/index.js',
        //     'setImmediate'
        // ];
        // providePluginConfig['clearImmediate'] = [
        //     'sketch-polyfill-settimeout/lib/index.js',
        //     'clearImmediate'
        // ];
        // providePluginConfig['setInterval'] = [
        //     'sketch-polyfill-setinterval/lib/index.js',
        //     'setInterval'
        // ];
        // providePluginConfig['clearInterval'] = [
        //     'sketch-polyfill-setinterval/lib/index.js',
        //     'clearInterval'
        // ];
        // providePluginConfig['Promise'] = 'promise-polyfill/lib/index.js';
    }

    config.plugins.push(
        new webpack.ProvidePlugin(providePluginConfig)
    );

    return config;
};

module.exports = providePlugin;
