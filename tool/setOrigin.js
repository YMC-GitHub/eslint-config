/* eslint-disable no-console */
/* eslint-env node */
const { remote } = require('./git');

const GITHUB_REPO = 'eslint-config';
const GITHUB_USER = 'ymc-github';
remote(['set-url', 'origin', `https://github.com/${GITHUB_USER}/${GITHUB_REPO}.git`])
  .then(report => console.log(report))
  .catch(err => console.log(err));
