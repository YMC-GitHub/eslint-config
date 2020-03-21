# note-using-eslint

## content

### download as a local module

```sh
npm install eslint --save-dev
```

### run as a local module in cli

```sh
./node_modules/.bin/eslint --fix .
```

### create a config running as a local module in cli

```sh
./node_modules/.bin/eslint --init
```

### get the version running as a local module in cli

```sh
./node_modules/.bin/eslint --version
```

### print a conf file running as a local module in cli

```sh
./node_modules/.bin/eslint --print-config .eslintrc.js
```

### check files running as a local module in cli

```sh
# check pwd files
./node_modules/.bin/eslint .
### cache
# Only check changed files
./node_modules/.bin/eslint --cache .
# set the cache file position
./node_modules/.bin/eslint --cache --cache-file .eslintcache .
### comment
# Adds reported errors for unused eslint-disable directives
./node_modules/.bin/eslint --report-unused-disable-directives --cache --cache-file .eslintcache .
# Prevent comments from changing config or rules
--no-inline-config

### Ignoring files
# 关闭忽略
--no-ignore
# 忽略目录
--ignore-path
./node_modules/.bin/eslint --report-unused-disable-directives --ignore-path data/ .

### Fixing problems
# 自动修复
--fix
# 修复测试
--fix-dry-run
```
