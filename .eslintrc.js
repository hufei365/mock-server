module.exports = {
    root: true,
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    plugins: ['vue'],
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/typescript'],
    globals: {},
    ignorePatterns: [
        'dist/*',
        'commitlint.config.js',
        '.eslintrc.js',
        'pre-push.js',
    ],
    rules: {
        'no-console': process.env.NODE_ENV !== 'production' ? 0 : 1,
        'no-useless-escape': 0,
        'no-empty': 0,
        'no-unused-vars': 1,
        'no-constant-condition': 1,
        'no-cond-assign': 1,
        'no-prototype-builtins': 1,
        'no-cond-assign': 1,
        'no-extra-semi': 1,
        'no-control-regex': 1,
        'vue/no-side-effects-in-computed-properties': 1,
    },
    overrides: [
        {
            files: ['./types/*'],
            rules: {
                'no-unused-vars': 0,
            },
        },
    ],
}
