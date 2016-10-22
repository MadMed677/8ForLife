const path = require('path');
const srcGlob = 'src/**/specs/index.spec.js';
process.env.BABEL_ENV = 'test';

module.exports = function setKarmaConfig(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon'],


        // list of files / patterns to load in the browser
        // eqivalent: files: [srcGlob]
        files: ['./src/**/specs/index.spec.js'],

        plugins: [
            'karma-chai',
            'karma-sinon',
            'karma-mocha',
            'karma-webpack',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-phantomjs-launcher'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        // eqivalent: files: [srcGlob]
        preprocessors: {
            './src/**/specs/index.spec.js': ['webpack', 'sourcemap']
        },

        webpack: {

            entry: [
                'babel-regenerator-runtime',
                './src/js/app/app.react.js'
            ],

            output: {
                path: path.join(__dirname, 'static/js'),
                filename: 'app.js',
                publicPath: '/static/js/'
            },

            module: {
                noParse: [
                    // dynamic require calls in sinon confuse webpack so we ignore it
                    /node_modules\/sinon\//
                ],
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel',
                        exclude: /node_modules/,
                        query: {
                            presets: ['react', 'es2015', 'stage-0'],
                            plugins: ['transform-decorators-legacy'],
                            env: {
                                test: {
                                    plugins: [
                                        ['__coverage__', { ignore: '*.spec.*' }]
                                    ]
                                }
                            }
                        }
                    }
                ]
            },

            devtool: 'inline-source-map',

            resolve: {
                extensions: ['', '.js', '.json'],
                alias: {
                    // dynamic require calls in sinon confuse webpack so we ignore it
                    sinon: 'sinon/pkg/sinon'
                }
            },

            externals: {
                cheerio: 'window',
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }

        },
        webpackMiddleware: { noInfo: true },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            reporters: [
                { type: 'lcov', dir: 'coverage/', subdir: '.' },
                { type: 'json', dir: 'coverage/', subdir: '.' },
                { type: 'text-summary' }
            ]
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR
        //  || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // browsers: ['ChromeCanary'],
        browsers: ['PhantomJS'],

        webpackServer: {
            noInfo: true
        },

        babelPreprocessor: {
            options: {
                presets: ['airbnb']
            }
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
