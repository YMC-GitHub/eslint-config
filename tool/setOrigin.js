/* eslint-disable no-console */
const { remote } = require('./git')

remote(['set-url', 'origin', 'https://github.com/YMC-GitHub/commitlint-config.git'])
    .then(report => console.log(report))
    .catch(err => console.log(err))
