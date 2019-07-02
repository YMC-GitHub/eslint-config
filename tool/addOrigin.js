/* eslint-disable no-console */
const { remote } = require('./git')

remote(['add', 'origin', 'https://github.com/YMC-GitHub/commitlint-config.git'])
    .then(report => console.log(report))
    .catch(err => console.log(err))
