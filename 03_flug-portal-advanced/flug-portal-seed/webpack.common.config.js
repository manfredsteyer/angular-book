const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    return {
        entry: {
            'vendor': ['./src/polyfills.ts', './src/vendor.ts', '@angular/platform-browser-dynamic'],
            'app': './src/main.ts'
        },
        output: {
            path: __dirname + '/dist/build',
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        devtool: 'cheap-module-source-map',
        performance: {
            hints: false
        },
        module: {
            rules: [
                {
                    test: /\.(css|html|xlf)$/,
                    use: 'raw-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
                    use: 'file-loader?name=assets/[name].[ext]'
                },
                {
                    test: /\.ts$/,
                    use: [
                        'awesome-typescript-loader?configFileName=src/tsconfig.app.json',
                        'angular2-template-loader',
                        'angular-router-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    include: /node_modules/,
                    use: ExtractTextPlugin.extract({
                        use: env === 'prod' ? 'css-loader?minimize' : 'css-loader?sourceMap'
                    })
                },
                {test: /\.ts$/, use: 'tslint-loader', enforce: 'pre'}
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: module => module.resource && module.resource.startsWith(__dirname + '/node_modules'),
                chunks: [
                    'app'
                ]
            }),
            new HtmlWebpackPlugin({
                title: 'Flug Portal',
                template: './src/index.ejs',
                favicon: './src/favicon.ico'
            }),
            new ExtractTextPlugin({filename: '[name].css'}),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new webpack.DefinePlugin({
                ENV: JSON.stringify(env)
            })
        ]
    };
};
