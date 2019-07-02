const rules = require('../index.js').rules;
const read = require('@commitlint/read');
const lint = require('@commitlint/lint');
const {addFile,commit} = require('./git');

 read({edit: '.git/COMMIT_EDITMSG'})
 .then(content => lint(content[0],rules))
 .then(msg => { 
    return addFile(['package.json','tool/']).then(()=>msg);
  })
 .then(result => {
     if(result.valid){
        return commit(result.input)
     }else{
        console.log(result)
        return result
     }
 })
 .then(report => console.log(report.stdout))
 .catch(console.log);
