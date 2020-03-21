# note-using-eslint-find-rules

## content

### download as a local module

```sh
npm install eslint-find-rules --save-dev
```

### run as a local module in cli

```sh
::<<eof
# 查看所有可用规则
./node_modules/.bin/eslint-find-rules --all-available

# 查看当前已用规则
./node_modules/.bin/eslint-find-rules --current

# 查看未用到的规则
./node_modules/.bin/eslint-find-rules --unused

# 查看已经废弃规则
./node_modules/.bin/eslint-find-rules --deprecated
# 参考
# https://www.npmjs.com/package/eslint-find-rules
eof
```

### run as a local module in scripts

```js
var getRuleFinder = require("./eslint-find-rules");
var ruleFinder = getRuleFinder(".eslintrc.js");
ruleFinder.getCurrentRules();
ruleFinder.getCurrentRulesDetailed();
ruleFinder.getPluginRules();
ruleFinder.getAllAvailableRules();
ruleFinder.getUnusedRules();
ruleFinder.getDeprecatedRules();
```
