import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        // регулярка по которой ищутся файлы
        test: /\.tsx?$/,
        // лоадер, который используется для этих файлов
        use: 'ts-loader',
        // не надо обрабатывать эту папку
        exclude: /node_modules/,
    };

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            //'css-loader',
            {
                loader: 'css-loader',
                options: {
                    //modules: true,
                    modules: {
                        mode: 'local',
                        // TODO заменить на регулярку
                        auto: (filePath: string) =>
                            Boolean(filePath.includes('.module.')),
                        localIdentName: options.isDev
                            ? '[name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    return [typescriptLoader, sassLoader];
}
