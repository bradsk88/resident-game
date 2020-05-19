const path = require('path');
const nodeExternals = require('webpack-node-externals');

const mode = 'development';

const clientConfig = {
    mode: mode,
    entry: {
        client: './src/index.ts',
        server: './src/server/local.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts' , '.js'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

const serverConfig = {
    mode: mode,
    target: 'node',
    entry: './src/server/local.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts' , '.js'],
    },
    externals: [nodeExternals()],
    output: {
        filename: 'node-local-server.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'residentServer',
        libraryTarget: 'umd'
    },
}


module.exports = [ clientConfig, serverConfig ];