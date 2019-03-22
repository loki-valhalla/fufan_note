## checkout
> git checkout xxx

+ 如果暂存区有内容,会把暂存区的内容检出到工作区
+ 如果暂存区没内容,会把存储区的内容检出到工作区
+ 谨慎使用该命令,一旦使用,不可撤销.

## .gitignore
+ 在window操作系统无法直接创建
+ index.html
+ web/ 直接忽略当前文件夹
+ 经常忽略依赖库文件夹,比如node_modules

## 时光机
+ git log 查看所有commit的历史记录
+ head HEAD -> master 指向哪个哈希值,哪个就是当前版本
+ git  reset --header  hashxxx  跳到某个版本,但是并没有删除其他版本


## 分支
+ git branch  xx   创建分支
+ git checkout xx   切换分支
+ $主分支    git  merge  dev   合并dev分支到当前主分支
+ git branch -d  dev   删除dev分支

## 处理冲突
+ 如果多个用户同时往一个共享仓库提交代码,如果同时修改一个文件会出现冲突
+ 如果出现提交报错,提示冲突,应该先 git pull 拉下来,再通过手动合并.

