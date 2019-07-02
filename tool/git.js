const execa = require('execa');
/*
execa("git",["log","-n 1"]).then(result => {
    console.log(result.stdout);
}).catch(err => console.log(err));
*/
function pwd(){
    return execa("pwd")
}
function cd(repoPath){
    return execa("cd",[repoPath])
}
function ls(repoPath){
    return execa("ls",[repoPath])
}
function mkdir(repoPath){
    return execa("mkdir",["--parents",repoPath])
}

function init(){
    return execa("git",["init"])
}
function addFile(file){
    return execa("git",["add",...(file || [])])
}
function addAll(){
    return execa("git",["add","."])
}
function status(){
    return execa("git",["status"])
}

function commit(message){
    console.log(message)
    return execa("git",["commit","-m",message])
}
function remote(opts){
  return execa("git",["remote",...(opts || [])])
}
module.exports = {
    init,
    addFile,
    addAll,
    status,
    commit,
    remote
}