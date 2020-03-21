# note-migrating-from-a-project

## content

### init the project

```sh
# from 88e57f7
git clone https://github.com/YMC-GitHub/commitlint-config.git eslint-config-yemiancheng

# set up-stream
git remote set-url origin https://github.com/YMC-GitHub/eslint-config.git


# updates some files
::<<eof
tool/addOrigin.js
tool/setOrigin.js
tool/shields.js
tool/index.js
readme.md
package.json
mv index.js to commitlint.config.js
eof

# deletes some files
::<<eof
run-as-a-local-module-in-cli.md
run-as-a-local-module-in-scripts.md
eof
git filter-branch --tree-filter 'rm --force run-as-a-local-module-in-cli.md run-as-a-local-module-in-scripts.md' HEAD

# some files maybe update
::<<eof
my-git-commit-style-standard.md
.travis.yml
eof

# install npm dev dependences
npm install --save-dev

# write commit msg
::<<eof
build(migrating): initing the project by migrating a project

   clones the project from 88e57f7 on:
   git clone https://github.com/YMC-GitHub/commitlint-config.git
   sets up-stream
   updates some files
   deletes some files
   installs npm dev dependences
   writes commit msg
   commits the changes
   pushs to the remote
eof
```
