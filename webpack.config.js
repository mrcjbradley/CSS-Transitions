// This library allows us to combine paths easily
const path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '*']
    },
    module: {
        rules: [
            // {
            //     test: /\.js/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['env']
            //         }
            //     }
            // },
            {
                test: /\.scss/,
                use: ['style-loader', {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
                
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                use: {loader: "file-loader"},
            }
        ]
    },
    devServer: {
        contentBase: './src',
        publicPath: '/output'
    },
    devtool: 'eval-source-map'
};
