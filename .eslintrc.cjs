module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
  },
}
