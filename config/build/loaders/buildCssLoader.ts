import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
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
                        auto: (filePath: string) => {
                            return Boolean(filePath.includes('.module.'));
                        },
                        localIdentName: isDev ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
            // {
            //     loader: 'sass-loader',
            //     options: {
            //         prependData: '@import "../../../src/app/styles/index.scss";',
            //     },
            // },
        ],
    };
}
