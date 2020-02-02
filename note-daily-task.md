### 查看版本提交历史
```sh
::<<eof
git log --pretty=format:"%B"  > .git/git_log_pretty_B.txt
eof
```

### 查看版本操作历史
```sh
::<<eof
git reflog expire --expire=now --all
eof
```

