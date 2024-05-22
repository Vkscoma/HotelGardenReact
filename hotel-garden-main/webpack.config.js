import path from 'path'; // imports the path module

export default {
    entry: './src/App.jsx', // the entry point of your app
    output: {
        filename: 'main.js', // the name of the output bundle
        path: path.resolve('hotel-garden-main', 'dist'), // where to output the bundle
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
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // resolves these extensions
    },
};
