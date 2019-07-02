### the git-commit message format
```sh
::<<eof
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
eof
```

### the kind of git-commit message types
```sh
::<<eof
#@commitlint/config-angular": "^8.0.0"
feat：添加-新的功能（feature）
fix：修补-代码补丁（bug）
docs：修缮-文档说明（documentation）
style： 修缮-代码风格（不影响代码运行的变动）
refactor：修缮-代码重构（即不是新增功能，也不是修改bug的代码变动）
test：修缮-代码测试
build：修缮-代码构建
perf：修缮-代码性能（performance）
revert：撤销-代码提交
ci：修缮-持续集成
eof

::<<it-is-in-influnces-for-config-angular
'type-enum': [2, 'always',['build','ci','docs','feat','fix','perf','refactor','revert','style','test']]
it-is-in-influnces-for-config-angular
```

### the type-case of git-commit message types
```sh
# examles
echo "FIX: some message" | ./node_modules/.bin/commitlint # fails
echo "fix: some message" | ./node_modules/.bin/commitlint # passes

::<<it-is-in-influnces-for-config-angular
'type-case': [2, 'always', 'lower-case']
it-is-in-influnces-for-config-angular
```

### the type-empty of git-commit message types
```sh
# examles
echo ": some message" | ./node_modules/.bin/commitlint # fails
echo "fix: some message" | ./node_modules/.bin/commitlint # passes

::<<it-is-in-influnces-for-config-angular
'type-empty': [2, 'never']
it-is-in-influnces-for-config-angular
```

### the scope-case of git-commit message scope
```sh
# examles
echo "fix(SCOPE): some message" | ./node_modules/.bin/commitlint # fails
echo "fix(scope): some message" | ./node_modules/.bin/commitlint # passes

::<<it-is-in-influnces-for-config-angular
'scope-case': [2, 'always', 'lower-case']
it-is-in-influnces-for-config-angular
```


### the subject-case of git-commit message subject
```sh
# examles
echo "fix(SCOPE): Some message" | ./node_modules/.bin/commitlint # fails
echo "fix(SCOPE): Some Message" | ./node_modules/.bin/commitlint # fails
echo "fix(SCOPE): SomeMessage" | ./node_modules/.bin/commitlint # fails
echo "fix(SCOPE): SOMEMESSAGE" | ./node_modules/.bin/commitlint # fails
echo "fix(scope): some message" | ./node_modules/.bin/commitlint # passes
echo "fix(scope): some Message" | ./node_modules/.bin/commitlint # passes

::<<it-is-in-influnces-for-config-angular
'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case']
		]
it-is-in-influnces-for-config-angular
```

### the subject-empty of git-commit message subject
```sh
# examles
echo "fix:" | ./node_modules/.bin/commitlint # fails
echo "fix(scope): some message" | ./node_modules/.bin/commitlint # passes


::<<it-is-in-influnces-for-config-angular
'subject-empty': [2, 'never']
it-is-in-influnces-for-config-angular
```

### the end char of git-commit message subject
```sh
# examles
echo "fix: some message." | ./node_modules/.bin/commitlint # fails
echo "fix: some message" | ./node_modules/.bin/commitlint # passes


::<<it-is-in-influnces-for-config-angular
'subject-full-stop': [2, 'never', '.']
it-is-in-influnces-for-config-angular
```

### the char length of git-commit message header
```sh
# examles
echo "fix: some message that is way too long and breaks the line max-length by several characters" | ./node_modules/.bin/commitlint # fails
echo "fix: some message" | ./node_modules/.bin/commitlint # passes


::<<it-is-in-influnces-for-config-angular
'header-max-length': [2, 'always', 72]
it-is-in-influnces-for-config-angular
```

### the begin char of git-commit message body
```sh
# examles
echo "fix: some message \r\n i am body" | ./node_modules/.bin/commitlint # passes

::<<it-is-in-influnces-for-config-angular
'body-leading-blank': [1, 'always']
it-is-in-influnces-for-config-angular
```

### the begin char of git-commit message footer
```sh
# examles
echo "fix: some message \r\n i am body \r\n i am footer" | ./node_modules/.bin/commitlint # passes

::<<it-is-in-influnces-for-config-angular
'footer-leading-blank': [1, 'always']
it-is-in-influnces-for-config-angular
```