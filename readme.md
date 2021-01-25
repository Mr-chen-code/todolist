# readme文档
- 项目说明文档
- 一般都与项目放一起

# git操作


## 初始化版本库
- git init(命令)
- 初始化成功后,当前目录后面有(master)
- 初始化成功后当前目录下有个隐藏文件.git(不要去操作这个文件)

## 工作区
- 持有实际文件
- 我们平时增删改查的文件都是工作区的内容

## 提交到暂存区
- 看不到的一个地方
- 也是存在于用户电脑中的
- 本地仓库的一个主要组成部分

## 本地仓库
- 看不到的一个地方
- 也是存在于用户电脑中的
- 用于存储项目代码及版本项目记录等信息

## 提交到暂存区
- git add 文件名(命令)
- 将工作区的变动(增删改)提交到暂存区
- git add .  将所有变动(指当前命令下的文件夹目录下的文件内容)提交到暂存区

## 查看状态
- git status(命令)
- 查看工作区和暂存区的状态(增删改)

## 提交到本地仓库
- git commit -m '提交注释'(命令)
- 将代码从暂存区提交到本地仓库
- 执行git status 查看状态提示：On branch master nothing to commit, working tree clean,说明提交成功


## 本地操作关键步骤(命令)
1. git init(第一次需要)
2. git add .
3. git commit -m '注释'
- 注意：当要想本地仓库的代码时时同步工作区的内容时,每当工作区的内容发生改变时,就得执行 gin add. 这个命令
- 将内容区的最新内容提交到暂存区中,然后再使用  git commit -m '提交注释'这个命令,将暂存区的代码提交到本地仓库
- 每当工作区的内容区的发生改变(增删改),那么执行git status命令则会提示Changes not staged for commit:
    - (use "git add <file>..." to update what will be committed)
    -  (use "git restore <file>..." to discard changes in working directory)
    -       modified:   readme.md
    - 说明此时工作区的最新内容没有提交到暂存区中,此时可以执行git - - add . 命令,将工作区的最新内容提交到暂存区,
    - 之后再执行git status,出现:On branch master
    - Changes to be committed:
    - (use "git restore --staged <file>..." to unstage)
    - modified:   readme.md,说明已经提交成功了
    - 然后在执行git commit -m '注释'将暂存区的代码提交到本地仓库,如果要查看是否提交成功,可以再执行git status命令查看提
    - 交状态，

## 查看日志
- git log 查看完整日志
- git reflog 查看简单日志

## 版本回退
- git reset --hard HEAD^ 回退到上一个版本
- git reset --hard 版本号 回退到指定版本
- 注意：把当前代码先提交到本地仓库
- 版本回退作用:工作区的代码自动变成恢复的指定版本
    

## 查看变动
- git diff 文件名
- 会列出该文件前后的差异

## 创建远程仓库
- 进入 github官网
- 创建一个新的远程仓库

## 将本地仓库与远程仓库关联
- git remote add origin 你的远程仓库地址
- git remote -v 查看本地仓库关联的远程地址

## 将本地仓库提交到远程仓库
- git push -u origin master：第一次提交到远程
- git push
-  -u origin master：设置默认的提交地址和分支
## 正常提交(非第一次)
- git add . :提交到暂存区
- git commit -m '注释' ：提交到本地仓库
- git pull ：先更新远程到本地
- git push ：提交到远程仓库(默认提交到origin上的master分支)

## 修改关联的远程仓库地址
- git remote rm origin
- git remote add origin ssh地址

## 更新代码
- 1、确保自己工作区的代码先提交到本地仓库
- 2、然后再从远程更新到本地(执行git pull命令)
- git clone 远程仓库地址 ：克隆代码到本地
##