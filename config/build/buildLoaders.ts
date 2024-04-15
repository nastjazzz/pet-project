import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

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

    const sassLoader = buildCssLoader(isDev);

    return [imgLoader, svgLoader, babelLoader, typescriptLoader, sassLoader];
}
