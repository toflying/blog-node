
## 项目依赖安装
```
npm install
```

### 项目运行
```
node serve
or
nodemon serve //首先要安装nodemon
```
----
#### 如果是自己搭建 按以下步骤
#### 创建文件夹
#### 初始化包
+ npm init
#### express@next 版本5以下  cors解决跨域

+ cnpm install express@next mongoose cors

#### 自动重载nodejs项目

+ cnpm install -g  nodemon
  

#### 启动mongodb服务   本机
```
MongoDB安装
//任何位置执行
mongod --dbpath E:/MongoDB/data/db
//bin目录下执行
mongod --dbpath=../data/db
直接在bin目录下启动 mongod.exe 程序  我的另一个电脑就是这种开启的
链接数据库 mongo命令 或者是图形化工具 [robo 3t](https://robomongo.org/)

然后打开文章创建页进行数据录入即可 
```

