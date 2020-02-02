### run as a local module in scripts
```js
//test/timing.js
var test = require('tape');

test('timing test', function (t) {
    t.plan(2);

    t.equal(typeof Date.now, 'function');
    var start = Date.now();

    setTimeout(function () {
        t.equal(Date.now() - start, 100);
    }, 100);
});
```


### run as a local module in cli
```sh
::<<eof
# 方式01
./node_modules/.bin/tape  "test/**/*.js"
# 方式02
node test/timing.js
eof
```

### run as a local module in cli for es6+
```sh
::<<eof
# 方式01
./node_modules/.bin/tape --require @babel/register "test/**/*.js"
# 方式02
node test/es6Entry.js
# 参考：
# https://www.npmjs.com/package/tape
# https://blog.csdn.net/w1366352655/article/details/84977485
# https://github.com/senntyou/blogs
# the way to use babel
eof
```
### run as a local module in scripts for es6+
```js
//test/es6Entry.js
require('@babel/register', {
  // eslint-disable-line global-require
  presets: require('../babel.config.js').presets
});
require('./requires.js');
require('./test-base.js');
```
