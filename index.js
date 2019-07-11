/* eslint-env node */
module.exports = {
  extends: [
    './rules/errors',
    './rules/style',
    './rules/variables',
    './rules/node',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
};
