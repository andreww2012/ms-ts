/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
const OFF = 0;
const WARNING = 1;
const ERROR = 2;

// https://eslint.org/docs/latest/use/configure/configuration-files
module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'unicorn'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
    'plugin:unicorn/recommended',
    'prettier',
  ],

  settings: {},

  overrides: [],

  rules: {
    '@typescript-eslint/default-param-last': ERROR,
    '@typescript-eslint/ban-types': [ERROR, {types: {object: false, '{}': false}}],
    '@typescript-eslint/no-dynamic-delete': OFF,
    '@typescript-eslint/no-empty-interface': [
      ERROR,
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': [ERROR, {fixToUnknown: true, ignoreRestArgs: true}],
    '@typescript-eslint/no-shadow': ERROR,
    '@typescript-eslint/prefer-literal-enum-member': [ERROR, {allowBitwiseExpressions: true}],

    'unicorn/prevent-abbreviations': OFF,
  },
};
