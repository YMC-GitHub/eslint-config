# note-using-commitlint

## content

### download as local module

```sh
npm install --save-dev @commitlint/config-angular @commitlint/cli
```

### make a configurantion file

```sh
echo "module.exports = {extends: ['@commitlint/config-angular']};" > commitlint.config.js
```

### run as local module

```sh
# with an incorret git commit message
echo "fix(SCOPE): some message" | ./node_modules/.bin/commitlint
# with an corret git commit message
echo "fix(scope): some message" | ./node_modules/.bin/commitlint
```

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

### an idea for using commitlint

```sh
# steps-01:write git-commit msg in a flie
::<<eof
#from ./.git/COMMIT_EDITMSG or a cunstom flie the content is as below
docs(commitlint):update git-commit-message style

    write git-commit msg in a flie ,then read , lint and commit:
    write and read from ./.git/COMMIT_EDITMSG or a cunstom flie
    lint with commitlint
    commit
eof

# steps-02:read git-commit msg in a flie
::<<eof
# you can read with cat in cli:
cat ./.git/COMMIT_EDITMSG

# you can read with < in cli:
cat < ./.git/COMMIT_EDITMSG
eof

# steps-03:lint git-commit msg with commitlint
::<<eof
# run  commitlint as a local modlue in cli:
#2 read with cat in cli
cat ./.git/COMMIT_EDITMSG | ./node_modules/.bin/commitlint
#2 read with < in cli
./node_modules/.bin/commitlint < ./.git/COMMIT_EDITMSG
eof

# steps-04:commit git-commit msg
::<<eof
# you can take the message from a file then commit:
git commit --file ./.git/COMMIT_EDITMSG
eof
```

### check a git-log history

```sh
# steps-01:log all history with `git log`
::<<eof
git log --pretty=format:"%B"  > .git/git_log_pretty_B.txt
eof

# steps-02:get a history with `git log`
::<<eof
#2 match a history with some commit msg using --grep
git log --pretty=format:"%B" --grep="manage with npm"
eof

# steps-03:lint git-commit msg with commitlint
::<<eof
# run  commitlint as a local modlue in cli:
git log --pretty=format:"%B" --grep="manage with npm" | ./node_modules/.bin/commitlint
eof

# steps-04:update a git-commit msg history
::<<eof
## set the default editor my love
git config --global core.editor nano

# get the commit comand log
git reflog | grep "manage with npm"
# select which commit to alterm,here is HEAD@{11} ore use commit id

# git rebase --interactive HEAD~11
git rebase --interactive HEAD@{11}

# do as the tips in cli
# do sth. here

# alter commit msg
git commit --amend

# after finish altering commit msg
git rebase --continue

#check for altering
git log

## updates the first commit message
#git rebase -i --root

# reference:https://www.jianshu.com/p/0f1fbd50b4be
eof

```

[for more infomation](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-angular)
