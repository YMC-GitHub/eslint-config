/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const read = require('@commitlint/read')
const lint = require('@commitlint/lint')
const { rules } = require('../index.js')
const { addFile, commit } = require('./git')

read({ edit: '.git/COMMIT_EDITMSG' })
    .then(content => lint(content[0], rules))
    .then(msg => addFile(['tool/index.js', 'note-using-travics-ci.md']).then(() => msg))
    .then((result) => {
        if (result.valid) {
            return commit(result.input)
        }
        console.log(result)
        return result
    })
    .then(report => console.log(report.stdout))
    .catch(console.log)
