import type webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    // for extraction translations into separate file
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            nsSeparator: '~',
                            locales: ['en', 'ru'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const svgLoader = {
        test: /\.svg$/i,
        loader: '@svgr/webpack',
        issuer: /\.[jt]sx?$/,
        options: {
            name: '[path][name].[ext]',
            outputPath: 'images/',
        },
    };

    const imgLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
            outputPath: 'images/',
        },
    };

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
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // 'css-loader',
            {
                loader: 'css-loader',
                options: {
                    // modules: true,
                    modules: {
                        mode: 'local',
                        // TODO заменить на регулярку
                        auto: (filePath: string) => { return Boolean(filePath.includes('.module.')); },
                        localIdentName: isDev ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    return [imgLoader, svgLoader, babelLoader, typescriptLoader, sassLoader];
}
