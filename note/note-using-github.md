# note-using-github

## content

### Creating Project Pages using-cli

```sh
::<<eof
MY_REPO_DIR=
# 克隆仓库
git clone https://github.com/user/repository.git
# 创建分支
cd $MY_REPO_DIR
git branch
git checkout --orphan master
# 添加内容
echo "My Page" > index.html
# 版本管理
git add index.html
git commit -a -m "First pages commit"
$ git push origin master

# 参考文献：
https://help.github.com/en/articles/creating-project-pages-using-the-command-line
eof
```

### Creating a custom 404 page for GitHub Pages

```sh
::<<eof
# 切换目录
#2 for user-pages
# master branch
#2 for org-pages
# master branch
#2 for a-project Project Pages site
# gh-pages branch

# 创建页面
echo "my custom 404 page" > 404.md

# 配置战点
# In the YAML front matter set as below:
# permalink: /404.html

# 参考文献：
# https://help.github.com/en/articles/creating-a-custom-404-page-for-your-github-pages-site
eof
```

### Getting started with the API

```sh
::<<eof
# 自动任务

# 备份数据

# 创建集成

# 参考文献：
# https://help.github.com/en/articles/getting-started-with-the-api
# https://developer.github.com/changes/
eof
```

### Building a GitHub App or an OAuth App

```sh
::<<eof
# 选择应用
# the usages of Apps on GitHub
# 自动任务
# 修缮流程
# 分享应用
# 出售应用

# 参考文献：
# https://developer.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/
eof
```

### Introduction to GraphQL

```sh
::<<eof
# 基本术语
#2 协议
#2 字段
#2 参数
#2 接口

# 使用命令
curl -i  https://api.github.com/user
curl -v https://api.github.com/orgs/:org/members
curl -v https://api.github.com/repos/octocat/Hello-World/pulls/10

# 获取简历
curl --include https://api.github.com/users/ymc-github

#含响应头
curl --include https://api.github.com/users/ymc-github

#基础认证
curl --include --user "ymc-github:xxx" https://api.github.com/users/ymc-github

#两步认证

#发送数据
#2 基础认证
curl --data '{"scopes": ["repo", "user"], "note": "getting-started"}' --user "ymc-github:xx"  https://api.github.com/authorizations
#2 两步认证
curl --header "X-GitHub-OTP: your_2fa_OTP_code" --data '{"scopes": ["repo", "user"], "note": "getting-started"}' --user "ymc-github:yxx"  https://api.github.com/authorizations

#使用令牌
curl --include --header "Authorization: token xx" https://api.github.com/users/ymc-github

# 列出仓库
#2自己的
curl --include --header "Authorization: token xx" https://api.github.com/users/ymc-github/repos
#2他人的
curl --include  https://api.github.com/users/technoweenie/repos
#2某组织
curl --include https://api.github.com/orgs/mozilla/repos
#2指定类型
curl --include "https://api.github.com/users/technoweenie/repos?type=owner"

#创建仓库
#2用户级
curl --data '{"name": "eslint-config-javascript", "auto_init": false,"private": false}' --include --header "Authorization: token xx" https://api.github.com/user/repos
#2组织级

#列出问题
#2所有仓库
curl --include --header "Authorization: token xx" https://api.github.com/issues
#2某一组织
curl --include --header "Authorization: token xx"  https://api.github.com/orgs/commitlint/issues
#2某一仓库
curl -i https://api.github.com/repos/ymc-github/commitlint/issues

#提出问题
curl --data '{"title": "New logo", "body": "We should have one","labels": ["design"]}' --include --header "Authorization: token xx" https://api.github.com/repos/ymc-github/eslint-config-javascript/issues


# 参考文献：
# https://developer.github.com/v4/guides/intro-to-graphql/
# https://developer.github.com/v4/explorer/
eof
```
