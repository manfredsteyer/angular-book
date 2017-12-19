const webpack = require('webpack');
const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const { AotPlugin } = require('@ngtools/webpack');

module.exports = function (env) {

    const commonConfig = require('./webpack.common.config')(env);

    const optimize = [
        new webpack.optimize.UglifyJsPlugin({
            output: {comments: false}
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ];

    let customConfig;

    const warningWorkaround = [
        // Build Warnung: https://github.com/angular/angular/issues/11580
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            __dirname + './src'
        )
    ];


    switch (env) {
        case 'aot':
        case 'aot-german':
            customConfig = {
                plugins: [...optimize, ...warningWorkaround],
                entry: {
                    'vendor': ['./src/polyfills.ts', './src/vendor.ts'],
                    'app': './src/main.aot.ts'
                },
                module: {
                    rules: [{
                        test: /\.ts$/,
                        use: 'angular-router-loader?aot=true&genDir=out-tsc/aot'
                    }]
                },
                output: {
                    path: __dirname + '/dist/build-aot'
                }
            };
            break;
        case 'aot-plugin':
            customConfig = {
                entry: {
                    'vendor': ['./src/polyfills.ts', './src/vendor.ts'],
                    'app': './src/main.aot.ts'
                },
                plugins: [
                    ...optimize,
                    new AotPlugin({
                        tsConfigPath: './tsconfig.aot.json',
                        entryModule: 'src/app/app.module#AppModule'
                    })
                ],
                module: {
                    rules: [
                        {
                            test: /\.ts$/,
                            use: '@ngtools/webpack'
                        }
                    ]
                },
                output: {
                    path: __dirname + '/dist/build-aot'
                }
            };
            return merge.smartStrategy(
                {
                    entry: 'replace',
                    'module.rules.use': 'replace'
                }
            )(commonConfig, customConfig);
            break;
        case 'prod':
            customConfig = {
                plugins: [...optimize, ...warningWorkaround],
                output: {
                    path: __dirname + '/dist/build-prod'
                }
            };
            break;
        case 'no-animation':
        case 'dev':
            customConfig = {
                plugins: warningWorkaround,
                devServer: {
                    port: 8081,
                    historyApiFallback: true,
                    contentBase: 'src'
                }
            };
            break;
        default:
            customConfig = {
                plugins: warningWorkaround
            };
    }

    // return merge.smart(commonConfig, customConfig);
    return merge.smartStrategy(
        {
            entry: 'replace'
        }
    )(commonConfig, customConfig);
};
