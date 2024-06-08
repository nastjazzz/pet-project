import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

// переопределение конфига вебпака, который включен в сторибук
export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildCssLoader(true));

  if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = ((config.module.rules as RuleSetRule[]) || []).map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.module?.rules?.push({
    test: /\.svg$/i,
    loader: '@svgr/webpack',
    issuer: /\.[jt]sx?$/,
    options: {
      name: '[path][name].[ext]',
      outputPath: 'images/',
    },
  });

  config.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
    }),
  );

  return config;
};
