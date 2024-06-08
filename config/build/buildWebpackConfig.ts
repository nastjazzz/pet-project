import type webpack from 'webpack';

import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

import { type BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.build,
      // для того, чтобы старые файлы удалялись
      clean: true,
    },
    module: {
      // тут идут настройки лоадеров, т.е. штук, которые будут обрабаывать файлы
      // которые выходят за рамки js
      rules: buildLoaders(options),
    },
    // вот тут мы указываем расширения файлов, которые не надо будет писать при импортах
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: options.isDev ? 'inline-source-map' : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined,
  };
}
