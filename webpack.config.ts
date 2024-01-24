import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// // in case you run into any typescript error when configuring `devServer`
// import 'webpack-dev-server';

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        // для того, чтобы старые файлы удалялись
        clean: true,
    },
    module: {
        // тут идут настройки лоадеров, т.е. штук, которые будут обрабаывать файлы
        // которые выходят за рамки js
        rules: [
            {
                // регулярка по которой ищутся файлы
                test: /\.tsx?$/,
                // лоадер, который используется для этих файлов
                use: 'ts-loader',
                // не надо обрабатывать эту папку
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // вот тут мы указываем расширения файлов, которые не надо будет писать при импортах
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            // тут указывается шаблон по которму будет собираться html
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
};

export default config;
