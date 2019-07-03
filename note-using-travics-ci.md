### CI builds and automation: building, testing, deploying
```sh
::<<eof
# 构建阶段：克隆仓库代码，执行一系列的构建任务。
# 测试阶段：运行测试代码，检查代码构建是否成功。
如果任务执行成功，则构建成功，否则构建失败。
# 部署阶段：发布代码到网页服务器或者到应用主机。
# 自动流程：
eof
```

### Builds, Jobs, Stages and Phases
```sh
::<<eof
# 短语：一个任务的若干片段。

# 任务：一系列自动化的处理。
比如，克隆仓库代码，执行系列短语，编译下拉代码，运行测试等等。

# 构建：一组若干相关的任务。
比如，拥有若干个任务，每个任务以不同的编程语言版本测试工程。

# 阶段：一组并行执行的任务。

eof
```


### Breaking the Build
```sh
::<<eof
# 出错：
before_install, install, 或 before_script返回非零的退出代码

# 失败：
script返回非零的退出代码

# 取消：
在任务完成之前，用户取消

eof
```

### To get started with Travis CI
```sh
::<<eof
# 访问官网
# https://travis-ci.com/

# 注册账户
# 

# 认证授权

# 选择仓库

# 设置配置.travis.yml
#2 操作系统
os: osx
#2 编程语言
language: node_js
#2 语言版本


# 提交代码
git add $some_file
git commit -m $some_msg
# 推送代码
#2 推送本地当前分支到远程origin的master
git push origin master
# 触发构建

# 查看构建
eof
```

### Customizing the Build
```sh
::<<eof
# 构建超时

# 任务数量
#2 限制为一
travis settings maximum_number_of_builds --set 1
#2 限制为某
travis settings maximum_number_of_builds --set 5

# 仅运行最新的提交

# 克隆深度
#2 三个-.travis.yml
git:
  depth: 3
#2 默认-.travis.yml
git:
  depth: 50
#2 全部-.travis.yml
git:
  depth: false

# 静默克隆
#2 静默模式-.travis.yml
git:
  quiet: true
#2 输出模式-.travis.yml
git:
  quiet: false

# 查看构建
eof
```

### Encrypting Sensitive Data
```sh
::<<eof
# steps01-安装软件
gem install travis
# steps02-登录账户
#2 for travis-ci.com
travis login --com
# steps03-加密数据
#2 for travis-ci.org
travis encrypt GITHUB_URL="secretvalue"
#2 for travis-ci.com
travis encrypt --com YMC_GITHUB_BRANCH="development" --add
travis encrypt --com YMC_GITHUB_REPO="commitlint-config" --add
travis encrypt --com YMC_GITHUB_NAME="ymc-github" --add
travis encrypt --com YMC_GITHUB_PASSWORD="xxx" --add
#2 写到配置
travis encrypt SOMEVAR="secretvalue" --add

# 下载公钥
#2 方式01-
https://api.travis-ci.org/repos/travis-ci/travis-ci/key
#2 方式02-在工程目录
travis pubkey
#2 方式03-在工程目录
travis pubkey -r owner/project

#git config --local travis.slug
# reference:https://docs.travis-ci.com/user/encryption-keys/
eof
```

### encrypting-files
```sh
::<<eof
### 加密单个文件
# 安装软件
gem install travis
# 登录账户
#2 for travis-ci.com
travis login --com
#2 for travis-ci.org
travis login --org
# 加密数据+写到配置
#2 for travis-ci.org
travis encrypt-file super_secret.txt --org --add
#2 for travis-ci.com
#travis encrypt-file super_secret.txt --com
travis encrypt-file super_secret.txt --com --add

# 解密数据
#.travics.yml
before_install:
 - openssl aes-256-cbc -K $encrypted_0a6446eb3ae3_key -iv $encrypted_0a6446eb3ae3_iv -in super_secret.txt.enc -out super_secret.txt -d

### 加密多个文件
 加密
#steps01-压缩文件
tar cvf secrets.tar foo bar
#steps02-加密文件
travis encrypt-file secrets.tar
#steps03-编辑配置
vi .travis.yml
#steps04-版本管理
git add secrets.tar.enc .travis.yml
#steps05-交版本库
git commit -m 'use secret archive'
#steps06-推至远程
git push
# 解密
before_install:
  #steps01-解密
  - openssl aes-256-cbc -K $encrypted_5880cf525281_key -iv $encrypted_5880cf525281_iv -in secrets.tar.enc -out secrets.tar -d
  #steps01-解压
  - tar xvf secrets.tar


#### 使用gpg-https://docs.travis-ci.com/user/encrypting-files/#using-gpg
#加密
#steps01-加密密码
travis encrypt super_secret_password=ahduQu9ushou0Roh --add
#steps02-签署密文
gpg -c super_secret.txt
#解密
env:
  global:
    secure: ... encoded secret ...
before_install:
  #输出变量
  #校验签署
  - echo $super_secret_password | gpg --passphrase-fd 0 super_secret.txt.gpg

#2 使用using-openssl-https://docs.travis-ci.com/user/encrypting-files/#using-openssl
#加密
travis encrypt super_secret_password=ahduQu9ushou0Roh --add
openssl aes-256-cbc -k "ahduQu9ushou0Roh" -in super_secret.txt -out super_secret.txt.enc
# 解密
env:
  global:
    secure: ... encoded secret ...
before_install:
  - openssl aes-256-cbc -k "$super_secret_password" -in super_secret.txt.enc -out super_secret.txt -d

#2 using-ssh
### 加密
#steps01-创建密钥
ssh-keygen -t rsa -b 4096 -C 'build@travis-ci.org' -f ./deploy_rsa
#steps02-加密私钥
travis encrypt-file deploy_rsa --com --add
#steps03-传公钥给主机
ssh-copy-id -i deploy_rsa.pub <ssh-user>@<deploy-host>
#steps04-删除密钥
rm -f deploy_rsa deploy_rsa.pub
#steps05-版本管理
git add deploy_rsa.enc .travis.yml
### 解密
addons:
  ssh_known_hosts: <deploy-host>
before_deploy:
- openssl aes-256-cbc -K $encrypted_<...>_key -iv $encrypted_<...>_iv -in deploy_rsa.enc -out /tmp/deploy_rsa -d
- eval "$(ssh-agent -s)"
- chmod 600 /tmp/deploy_rsa
- ssh-add /tmp/deploy_rsa
deploy:
  - provider: script
    skip_cleanup: true
    script: npm run deploy
    on:
      branch: master
  - provider: script
    skip_cleanup: true
    script: npm run index-content
    on:
      branch: master
eof
```

[Core Concepts for Beginners](https://docs.travis-ci.com/user/for-beginners/)