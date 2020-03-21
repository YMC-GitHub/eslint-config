# note-using-git

## content

### 查看某次提交的修改

```sh
::<<eof
#steps-01获取某次提交的编号
git log
#steps-02查看某次提交的修改
#2 查看所有文件
git show f75a62072e039
#2 查看某一文件
git show f75a62072e039 note-using-commitlint.md

eof
```

### 这个分支还有哪些提交尚未合并到主分支

```sh
::<<eof
# 查看“在 experiment 分支中而不在 master 分支中的提交”
git log master..experiment
# 查看在 master 分支中而不在 experiment 分支中的提交
git log experiment..master
# 查看本地当前分支中而不在远程 origin的master 中的提交
git log origin/master..HEAD

# 查看master 或者 experiment 中包含的但不是两者共有的提交
git log master...experiment
#2显示每个提交到底处于哪一侧的分支
git log --left-right master...experiment

eof
```

###查看某个文件的提交历史

```sh
::<<eof
git log --pretty=oneline package.json
eof
```

### 删除某次指定的提交

```sh
::<<eof
local_old_branch_name=old_master
remote_old_branch_name=old_master
commit_id="58093e1355716f0f861b64f1c3dfe59242be28f7"
#steps01-本地新建一个分支，用于备份数据，数据无价
git branch $local_old_branch_name

#steps02-推送本地分支到远程分支
git push origin $local_old_branch_name:$remote_old_branch_name

#steps03-本地恢复到想恢复的版本
git reset --hard $commit_id

#steps04-在web端settings页面，修改默认分支为新建的分支，可以删除远程分支了
#steps05-删除远程分支
git push origin :$remote_old_branch_name

#steps06-推送本地分支到远程分支
git push origin master
eof
```

### 修改提交注释信息

```sh
::<<eof
# 修改最近一次
#steps01-
git commit --amend
#steps02-
#steps03-
git rebase --continue

# 修改从某开始
git rebase --interactive
# 修改最开始的
git rebase --interactive --root
eof
```

### 修改提交的内容

```sh
::<<eof
# 修改最近一次提交
#2 方式01--commit --amend
#steps01-追加文件
git add some_file
#steps02-交版本库
git commit --amend
# 注意：在还没推送到远程使用，不然change-id会改变

#2 方式02--reset后修改
#steps01-追加文件
git reset HEAD^
#steps02-追加文件
git add some_file
#steps03-交版本库
git commit --file msg_file
# 注意：在还没推送到远程使用，不然change-id会改变

# 修改很久以前提交
https://blog.csdn.net/sodaslay/article/details/72948722
eof
```

### 提交次序数量修改

```sh
::<<eof
# 重排

# 合并

# 拆分
eof
```

### 提交批量修改

```sh
::<<eof
# 批量删除某一文件
#2 passwords.txt
git filter-branch --tree-filter 'rm -f passwords.txt' HEAD

# 子目录做新的根目
#2 子目录trunk
git filter-branch --subdirectory-filter trunk HEAD

# 修改邮箱以及名字
#2修改前的邮箱：schacon@localhost
#2修改后的作者：Scott Chacon
#2修改后的邮箱：schacon@example.com
 git filter-branch --commit-filter '
        if [ "$GIT_AUTHOR_EMAIL" = "schacon@localhost" ];
        then
                GIT_AUTHOR_NAME="Scott Chacon";
                GIT_AUTHOR_EMAIL="schacon@example.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD
eof
```

### 定义自己的个人配置

```sh
::<<eof
git config user.name "yemiancheng"
git config user.email ymc.github@gmail.com
#使用该文本编辑器作为默认编辑器
git config core.editor nano
#使用该文件的内容作为提交的默认信息
git config commit.template ./.git/COMMIT_EDITMSG
#要创建经签署的含附注的标签
git config --global user.signingkey <gpg-key-id>
git tag -s <tag-name>

# 格式化多余的空白字符
#Windows 使用回车（CR）和换行（LF）两个字符来结束一行
#Mac 和 Linux 只使用换行（LF）一个字符。
#设置-提交时自动地把回车和换行转换成换行
#设置-在检出代码时把换行转换成回车和换行
git config --global core.autocrlf true

#设置-提交时自动地把回车和换行转换成换行
#设置-在检出代码时不进行该符号转换的操作
git config --global core.autocrlf input


#识别二进制文件
#把所有 .docx 文件当成二进制文件，在 .gitattributes 文件中如下设置:
*.docx binary
#或者
echo '*.docx binary' > .gitattributes

# 比较二进制文件
#steps-01-告诉git，尝试查看包含变更的比较结果时，所有匹配 .docx 模式的文件都应该使用“word”过滤器
#把下面这行文本加到 .gitattributes 文件中
*.docx diff=word
#steps-02-下载docx2txt 程序将 Word 文档转为可读文本文件
# http://docx2txt.sourceforge.net
#steps-03-按照 INSTALL 文件的说明，把它放到你的可执行路径下
#steps-04-写一个脚本把输出结果包装成 Git 支持的格式。 在你的可执行路径下创建一个叫 docx2txt 文件，添加这些内容：
#!/bin/bash
docx2txt.pl $1 -
#steps-05-用 chmod a+x 给这个文件加上可执行权限
#steps-06-配置 Git 来使用这个脚本
 git config diff.word.textconv docx2txt
#steps-07-比较二进制文件
git diff
eof
```
