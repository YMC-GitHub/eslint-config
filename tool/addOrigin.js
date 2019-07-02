const {remote} = require('./git');
remote(["add","origin","https://github.com/YMC-GitHub/eslint-config-javascript.git"])
.then(report => console.log(report))
.catch(err => console.log(err));