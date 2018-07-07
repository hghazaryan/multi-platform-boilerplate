const path = require('path');
const PLATFORMS = require('./platforms.js');
const ENVIRONMENTS = require('./environments.js');

const entry = (config, platform, environment) => {
    if (platform === PLATFORMS.WEB) {
        config.entry = {
            web: [
                'babel-polyfill',
                path.resolve(__dirname, '../src/web.js')
            ]
        };
    }
    else if (platform === PLATFORMS.WEB_ES5) {
        config.entry = {
            'web-es5': [
                'babel-polyfill',
                path.resolve(__dirname, '../src/web.js')
            ]
        };
    }
    else if (platform === PLATFORMS.SERVER) {
        config.entry = {
            server: [
                'babel-polyfill',
                path.resolve(__dirname, '../src/server.js')
            ]
        };
    }
    else if (platform === PLATFORMS.SKETCH) {
        config.entry = {
            sketch: [
                // 'babel-polyfill', // Not sure we need this
                path.resolve(__dirname, '../src/sketch.js')
            ]
        };
    }

    return config;
};

module.exports = entry;
