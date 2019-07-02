/* eslint-disable no-console */
const { remote } = require('./git')

remote([])
    .then(report => console.log(report))
    .catch(err => console.log(err))
