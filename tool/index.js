const read = require('@commitlint/read');
const lint = require('@commitlint/lint');
const { rules } = require('../commitlint.config.js');
const { addFile, commit } = require('./git');

read({ edit: '.git/COMMIT_EDITMSG' })
  .then(content => lint(content[0], rules))
  .then((result) => {
    if (result.valid) {
      return addFile([
        'tool/index.js',
        'rules/style.js',
        './index.js'
      ]).then(()=>commit(result.input));
    }
    // eslint-disable-next-line
    console.log(result);
    return result;
  })
  // eslint-disable-next-line
  .then(report => console.log(report.stdout))
  // eslint-disable-next-line
  .catch(console.log);
