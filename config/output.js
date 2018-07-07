const path = require('path');
const PLATFORMS = require('./platforms.js');
const ENVIRONMENTS = require('./environments.js');

const output = (config, platform, environment) => {
    var output = {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public')
    };

    if (platform === PLATFORMS.SKETCH) {
        // @skpm/builder already handles the output for sketch
    }
    else if (platform === PLATFORMS.SERVER) {
        output.libraryTarget = 'commonjs2';
        output.publicPath = '/';

        config.output = output;
    }
    else {
        config.output = output;
    }

    return config;
};

module.exports = output;
