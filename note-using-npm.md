# note-using-npm

## content

### look up why install that package

```sh
# 查看某包信息
npm info eslint

npm info eslint@5.3.0 dependencies

# 是否装过某包

# 需要更新的包
npm outdated --depth=0
```

### 基本用法

```sh
# 获取帮助
#2 简短
npm --help
#2 较长
npm -l

# 获取某一命令帮助
# npm <command> --h
```

### access

```sh
npm access public [<package>]
npm access restricted [<package>]
npm access grant <read-only|read-write> <scope:team> [<package>]
npm access revoke <scope:team> [<package>]
npm access ls-packages [<user>|<scope>|<scope:team>]
npm access ls-collaborators [<package> [<user>]]
npm access edit [<package>]
```

### login

```sh
# 登录
#npm adduser [--registry=url] [--scope=@orgname] [--auth-type=legacy] [--always-auth]
#aliases: login, add-user
```

### whoami

```
# 谁在登录
# npm whoami [--registry <registry>]
npm whoami
```

### logout

```sh
# 登出
npm logout [--registry=<url>] [--scope=<@scope>]
```

### audit

```
# Run a security audit
# npm audit [--json]
# npm audit fix [--force|--package-lock-only|--dry-run|--production|--only=(dev|prod)]
# 修复
npm audit fix
#2 仅产品包
npm audit fix --only=prod
#2 仅开发包
npm audit fix --only=dev
# 仅仅测试
# npm audit fix --dry-run --json


# 仅仅测试
--dry-run

# 指定格式
--json

```

### bin

```
# Display npm bin folder
# npm bin [--global]
# 全局
npm bin --global
# 本地
npm bin
```

### bugs

```
# Bugs for a package in a web browser maybe
# npm bugs [<pkgname>]
# alias: issues
npm bugs eslint
npm issues eslint
```

### cache

```
# Manipulates packages cache
# 添加
npm cache add <tarball file>
npm cache add <folder>
npm cache add <tarball url>
npm cache add <git url>
npm cache add <name>@<version>
# 删除
npm cache clean
# 校验
npm cache verify

```

### ci

```
npm ci

```

### config

```
# 设置
npm config set <key> <value>
# 获取
npm config get [<key>]
# 删除
npm config delete <key>
# 列出
npm config list [--json]
# 编辑
npm config edit

# 设置
npm set <key> <value>
# 获取
npm get [<key>]

alias: c

```

### dedupe

```
# 移除重复的包
# npm dedupe
# aliases: ddp, find-dupes
npm dedupe
npm ddp
npm find-dupes
```

### deprecate

```
# 不再维护某包
#npm deprecate <pkg>[@<version>] <message>
npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
```

### dist-tag

```
# 管理包的构建标签
# 添加
npm dist-tag add <pkg>@<version> [<tag>]
# 移除
npm dist-tag rm <pkg> <tag>
# 列出
npm dist-tag ls [<pkg>]

#alias: dist-tags

```

### docs

```
# Docs for a package in a web browser maybe
# npm docs <pkgname>
# npm docs .
# alias: home
npm docs eslint
```

### doctor

```
# Check your environments
npm doctor

```

### get

```
npm get <key> <value> (See `npm config`)

```

### help-search

```
# Search npm help documentation
npm help-search <text>

```

### hook

```
# Manage registry hooks
npm hook ls [pkg]
npm hook add <entity> <url> <secret>
npm hook update <id> <url> [secret]
npm hook rm <id>

```

### init

```
#  create a package.json file
npm init [--force|-f|--yes|-y|--scope]
npm init <@scope> (same as `npx <@scope>/create`)
npm init [<@scope>/]<name> (same as `npx [<@scope>/]create-<name>`)

aliases: create, innit

```

### install

```
# nstall a package
npm install (with no args, in package dir)
npm install [<@scope>/]<pkg>
npm install [<@scope>/]<pkg>@<tag>
npm install [<@scope>/]<pkg>@<version>
npm install [<@scope>/]<pkg>@<version range>
npm install <folder>
npm install <tarball file>
npm install <tarball url>
npm install <git:// url>
npm install <github username>/<github project>

aliases: i, isntall, add
common options: [--save-prod|--save-dev|--save-optional] [--save-exact] [--no-save]

```

### install-test

```
# Install package(s) and run tests
npm install-test [args]
Same args as `npm install`

alias: it

```

### link

```
# Symlink a package folder
npm link (in package dir)
npm link [<@scope>/]<pkg>[@<version>]

alias: ln

```

### list

```sh
# List installed packages
#npm ls [[<@scope>/]<pkg> ...]
#aliases: list, la, ll
# 全局模式
npm list eslint-plugin-import --global
# 本地模式
npm list eslint-plugin-import
# 指定某包
npm list eslint-plugin-import
# 指定格式
npm list eslint-plugin-import --json
# 显示更多
npm list eslint-plugin-import --long
# 指定深度
npm list eslint-plugin-import --depth=10
# 产品依赖
npm list eslint-plugin-import --production
npm list eslint-plugin-import --prod
npm list eslint-plugin-import --only=prod
npm list eslint-plugin-import --only=production
# 开发依赖
npm list eslint-plugin-import --development
npm list eslint-plugin-import --dev
npm list eslint-plugin-import --only=dev
npm list eslint-plugin-import --only=development

npm list eslint-plugin-import --parseable

# 列出依赖
npm list | grep "eslint"
```

### prune

```sh
# Remove extraneous packages
# npm prune [[<@scope>/]<pkg>...] [--production]
```

### outdated

```sh
#Check for outdated packages
# npm outdated [[<@scope>/]<pkg> ...]

# 全局模式
npm outdated --global
# 本地模式
npm outdated

# 更多信息
npm outdated --long
# 指定格式
npm outdated --json

```

### edit

```
#
# Edit an installed package
# npm edit <pkg>[@<version>]

```

### explore

```
# Browse an installed package
npm explore <pkg> [ -- <command>]
```

### owner

```
npm owner add <user> [<@scope>/]<pkg>
npm owner rm <user> [<@scope>/]<pkg>
npm owner ls [<@scope>/]<pkg>

alias: author

```

### pack

```
npm pack [[<@scope>/]<pkg>...] [--dry-run]

```

### ping

```
npm ping

```

### prefix

```
npm prefix [-g]

```

### profile

```sh
# 启用两步认证
#npm profile enable-2fa [auth-only|auth-and-writes]
# 启关闭两步认证
#npm profile disable-2fa
# 获取
#npm profile get [<key>]
npm profile get
npm profile get --json
# 设置
npm profile set <key> <value>

```

### publish

```
npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>] [--dry-run]

# 指定标签
# Sets tag `latest` if no --tag specified

# 是否私有

# 指定目录
# Publishes '.' if no argument supplied

# 仅仅测试
```

### rebuild

```
npm rebuild [[<@scope>/<name>]...]
alias: rb
```

### repo

```
# Open package repository page in the browser
npm repo [<pkg>]
```

### root

```
npm root [-g]
```

### run-script

```
npm run-script <command> [-- <args>...]
aliases: run, rum, urn
```

### restart

```
npm restart [-- <args>]
```

### start

```
npm start [-- <args>]
```

### stop

```
npm stop [-- <args>]
```

### test

```
npm test [-- <args>]
aliases: tst, t
```

### search

```
npm search [--long] [search terms ...]
aliases: s, se, find
```

### shrinkwrap

```
npm shrinkwrap
```

### star

```
npm star [<pkg>...]
npm unstar [<pkg>...]

alias: unstar
```

### stars

```
npm stars [<user>]
```

### team

```
# 创建
npm team create <scope:team>
# 删除
npm team destroy <scope:team>
# 添加
npm team add <scope:team> <user>
# 移除
npm team rm <scope:team> <user>
# 列出
npm team ls <scope>|<scope:team>
# 编辑
npm team edit <scope:team>
```

### token

```
# 列出
npm token list
#
npm token revoke <tokenKey>
# 创建
npm token create [--read-only] [--cidr=list]
```

### unpublish

```
npm unpublish [<@scope>/]<pkg>[@<version>]
```

### uninstall

```
npm uninstall [<@scope>/]<pkg>[@<version>]... [--save-prod|--save-dev|--save-optional] [--no-save]
aliases: un, unlink, remove, rm, r
```

### update

```
npm update [-g] [<pkg>...]
aliases: up, upgrade, udpate
```

### version

```
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<perelease-id>] | from-git]

# to print npm version
npm --version
# to view a package's published version
npm view <pkg> version

# to inspect current package/dependency versions
npm ls
```

### view

```
#npm view [<@scope>/]<pkg>[@<version>] [<field>[.subfield]...]
#aliases: v, info, show
npm view eslint-plugin-import
npm info "eslint@latest" peerDependencies
npm info "eslint@latest" devDependencies
npm info "eslint@latest" dependencies
```

### Creating a default package.json file§

```sh
:<<eof
# 自己定义默认选项
# https://github.com/npm/init-package-json/blob/latest/default-input.js
# https://github.com/npm/init-package-json

#steps01- 设置默认选项取值
npm set init.author.name "yemiancheng"
npm set init.author.email "ymc.github@gmail.com"
npm set init.license "MIT"

#steps02- 运行命令创建文件
npm init --yes
eof
```
