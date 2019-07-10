/* eslint-disable no-console */
/* eslint-env node */
const { remote } = require('./git');

remote(['show', 'origin'])
  .then(report => console.log(report))
  .catch(err => console.log(err));
