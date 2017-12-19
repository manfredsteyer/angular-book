// Import von webpack um TypeScript in JavaScript zu transpilieren
var webpack = require('webpack');

// Karma Konfiguration
module.exports = function (config) {
    config.set({
        // Das genutzte Test Framework
        frameworks: ['jasmine'],
        // Ausgabe der Testergebnisse über verschiedene Reporter
        reporters: ['progress', 'coverage', 'karma-remap-istanbul', 'kjhtml'],
        // Der ausführende Browser
        browsers: ['Chrome'],
        // Wenn dieser Flag true ist werden die Tests ausgeführt und karma sowie der Browser danach beendet
        singleRun: false,
        // Konfiguration aller Dateien welche während des Tests benötigt werden
        files: [
            'src/test.ts'
        ],
        // Dateien welche vor dem eigentlichen Test durch ein preprocessor Module bearbeitet werden müssen
        preprocessors: {
            'src/test.ts': ['webpack', 'sourcemap']
        },
        // Webpack Preprocessor Konfiguration um TypeScript in JavaScript zu transpilieren.
        webpack: {
            devtool: 'inline-source-map',
            module: {
                rules: [
                    {
                        test: /\.ts$/,
                        use: [
                            'awesome-typescript-loader?configFileName=src/tsconfig.spec.json&compilerOptions={"sourceMap": false,"inlineSourceMap": true}',
                            'angular2-template-loader',
                            'angular-router-loader'
                        ],
                        exclude: /node_modules/
                    },
                    {
                        test: /\.ts$/,
                        use: 'istanbul-instrumenter-loader?embedSource=true&noAutoWrap=true',
                        exclude: ['node_modules', /\.spec\.ts$/, /test\.ts$/],
                        enforce: 'post'
                    },
                    {test: /\.(html|css)$/, use: 'raw-loader'}
                ]
            },
            resolve: {
                extensions: ['.ts', '.js']
            },
            plugins: [
                new webpack.SourceMapDevToolPlugin({
                    filename: null,
                    test: /\.(ts|js)($|\?)/i
                }),
                // Build Warnung: https://github.com/angular/angular/issues/11580
                new webpack.ContextReplacementPlugin(
                    /angular(\\|\/)core(\\|\/)@angular/,
                    __dirname + './src'
                )
            ],
            performance: {
                hints: false
            }
        },
        // Der webpack Preprocessor soll nur relevante logs an der Konsole ausgeben.
        webpackMiddleware: {stats: 'errors-only'},
        // Chrome benötigt den korrekten mime type
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        // Damit die Ausgabe von karma-jasmine-html-reporter im Browser erhalten bleibt
        client: {
            clearContext: false
        },
        // Coverage Report Generierung über istanbul
        coverageReporter: {
            reporters: [
                {type: 'in-memory'}
            ]
        },
        // Konvertiert istanbul Ergebnis so das TypeScript und nicht JavaScript angezeigt wird
        // Es können verschiedene Reporttypen wie zum Beispiel HTML und LCOV generiert werden
        remapIstanbulReporter: {
            reports: {
                html: 'coverage',
                lcovonly: 'coverage/lcov.info'
            }
        }

    });
};
