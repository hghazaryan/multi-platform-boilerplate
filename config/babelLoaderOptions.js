const PLATFORMS = require('./platforms.js');
const ENVIRONMENTS = require('./environments.js');

const babelLoaderOptions = (platform, environment) => {
    let targets = {},
        plugins = [
            // 'syntax-async-functions',
            // 'syntax-dynamic-import',
            // 'transform-async-to-generator',
            // 'transform-es2015-template-literals',
            // 'transform-object-rest-spread'
            // 'transform-regenerator',
            // [
            //     'transform-runtime',
            //     {
            //         'helpers': false,
            //         'polyfill': false,
            //         'regenerator': true,
            //         'moduleName': 'babel-runtime'
            //     }
            // ]
            // [
            //     'emotion',
            //     {
            //         // 'hoist': true,
            //         'sourceMap': true,
            //         'autoLabel': true
            //     }
            // ],
            [
                'styled-components',
                {
                    'ssr': (platform === PLATFORMS.SERVER),
                    'displayName': true,
                    'preprocess': false
                }
            ]
        ];

    if (platform === PLATFORMS.WEB) {
        targets = {
            browsers: [
                // The last two versions of each browser
                // supporting <script type="module">
                'Chrome >= 60',
                'Safari >= 10.1',
                'iOS >= 10.3',
                'Firefox >= 54',
                'Edge >= 15'
            ]
        };
    }
    else if (platform === PLATFORMS.WEB_ES5) {
        targets = {
            browsers: [
                // legacy browsers
                'last 2 versions',
                'ie >= 11',
                'Firefox ESR'
            ]
        };
    }
    else if (platform === PLATFORMS.SERVER) {
        targets = {node: "6.0.0"};
    }
    else if (platform === PLATFORMS.SKETCH) {
        targets = {node: "6.0.0"};
        plugins.unshift('transform-html-to-primitives');
    }


    let config = {
        // cacheDirectory: true,
        babelrc: false,
        presets: [
            // 'react',
            // [
            //     'env',
            //     {
            //         targets: targets,
            //         loose: true,
            //         modules: false,
            //         useBuiltIns: true,
            //         debug: false
            //     }
            // ],
            [
                'airbnb',
                {
                    targets: targets,
                    loose: true,
                    modules: false,
                    useBuiltIns: true,
                    debug: false
                }
            ]
        ],
        plugins: plugins
    };

    return config;
};

module.exports = babelLoaderOptions;
