const path = require('path');

const mode = 'development';

const clientConfig = {
    mode: mode,
    entry: {
        client: './src/index.ts',
        server: './src/server/local.ts',
        embed: './src/embed.entry.ts',
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
        modules: ['node_modules'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

function nodeConfig(filePath, name) {
    return {
        mode: mode,
        target: 'node',
        entry: filePath,
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
            modules: ['node_modules'],
        },
        output: {
            filename: name + '.node.js',
            path: path.resolve(__dirname, 'dist'),
            library: name,
            libraryTarget: 'umd'
        },
    }
}

const serverConfig = nodeConfig('./src/server/local.ts', 'residentServer');
const eventsConfig = nodeConfig('./src/events/index.ts', 'residentEvents');


module.exports = [ clientConfig, serverConfig, eventsConfig];