import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import CopyPlugin from 'copy-webpack-plugin';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // imports the path module

export default {
    entry: './src/App.jsx', // the entry point of your app
    output: {
        filename: 'main.js', // the name of the output bundle
        path: path.resolve(__dirname, 'dist'), // where to output the bundle
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // matches .js and .jsx files
                exclude: /node_modules/, // excludes the node_modules directory
                use: {
                    loader: 'babel-loader', // transpiles your code
                },
            },
            {
                test: /\.css$/, // matches .css files
                use: [
                    'style-loader', // injects CSS into the DOM
                    'css-loader', // resolves CSS imports
                    'postcss-loader' // processes CSS with PostCSS
                ], // uses the @svgr/webpack loader
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                    },
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    webp: {
                        quality: 75
                    },
                },
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // resolves these extensions
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'public', to: '' },
            ],
        }),
    ],
};
