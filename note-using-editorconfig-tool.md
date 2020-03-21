# note-using-editorconfig-tool

## content

### download as a local module

```sh
npm install editorconfig-tools --save-dev
```

### run as a local module in cli

```sh
::<<eof
# 功能01
# make a .editorconfig file from some files if not.
editorconfig-tools infer ./* ./lib/**/* ./test/**/* > .editorconfig

# 功能02
# check files with .editorconfig file
editorconfig-tools check README.md

# 功能03
# fix  files with .editorconfig file
editorconfig-tools fix README.md
# 参考
# https://www.npmjs.com/package/editorconfig-tools
eof
```
