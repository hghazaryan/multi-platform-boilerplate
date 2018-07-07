const path = require('path');
const PLATFORMS = require('./platforms.js');
const ENVIRONMENTS = require('./environments.js');

const resolve = (config, platform, environment) => {
   config.resolve.alias = config.resolve.alias || {};
   config.resolve.alias['@fortawesome/fontawesome-free-solid$'] = '@fortawesome/fontawesome-free-solid/shakable.es.js';
   config.resolve.alias['@fortawesome/fontawesome-free-regular$'] = '@fortawesome/fontawesome-free-regular/shakable.es.js';
   config.resolve.alias['@fortawesome/fontawesome-free-brands$'] = '@fortawesome/fontawesome-free-brands/shakable.es.js';
   config.resolve.alias['~'] = path.resolve(__dirname, '../src');
   // config.resolve.alias['~/Assets'] = path.resolve(__dirname, '../src/Assets');
   // config.resolve.alias['Icons'] = path.resolve(__dirname, '../src/Assets/Icons');

   if (platform === PLATFORMS.WEB) {
       config.resolve.extensions = ['.web.js', '.js'];
   }
   else if (platform === PLATFORMS.WEB_ES5) {
       config.resolve.extensions = ['.web-es5.js', '.js'];
   }
   else if (platform === PLATFORMS.SERVER) {
       config.resolve.extensions = ['.server.js', '.js'];
   }
   else if (platform === PLATFORMS.SKETCH) {
       config.resolve.extensions = ['.sketch.js', '.js'];
       config.resolve.alias['styled-components'] = 'styled-components/primitives';
   }

   return config;
};

module.exports = resolve;
