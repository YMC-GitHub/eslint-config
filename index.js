/* eslint-env node */
module.exports = {
  extends: [
    './rules/errors',
    './rules/style',
    './rules/variables',
    './rules/node',
    './rules/es6',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
};
