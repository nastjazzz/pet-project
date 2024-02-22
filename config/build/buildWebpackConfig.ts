import webpack from 'webpack';

import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

import { BuildOptions } from './types/config';

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            // для того, чтобы старые файлы удалялись
            clean: true,
        },
        module: {
            // тут идут настройки лоадеров, т.е. штук, которые будут обрабаывать файлы
            // которые выходят за рамки js
            rules: buildLoaders(options),
        },
        // вот тут мы указываем расширения файлов, которые не надо будет писать при импортах
        resolve: buildResolvers(),
        plugins: buildPlugins(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
