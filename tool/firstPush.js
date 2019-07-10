/* eslint-env node */
const { push } = require('./git');

push(['--set-upstream', 'origin', 'master']);
