module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': [2, 4],
        indent: ['error', 4],

        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/extensions': 'off',

        quotes: ['error', 'single'],
        'react/no-unused-prop-types': 'off',
        'no-unused-vars': 'warn',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/interactive-supports-focus': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',

        // "@typescript-eslint/semi": ["error", "always"],
        // "@typescript-eslint/comma-dangle": [
        //     "error",
        //     {
        //         arrays: "always-multiline",
        //         objects: "always-multiline",
        //         imports: "never",
        //         exports: "never",
        //         functions: "always-multiline",
        //     },
        // ],
        // "space-before-function-paren": "off",
    },
    globals: {
        __IS_DEV__: true,
    },
};
