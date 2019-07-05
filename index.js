module.exports = {
  extends: [
    './rules/errors',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
};
