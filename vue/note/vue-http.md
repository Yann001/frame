# vue与node之间的数据传输

[TOC]

>项目基于前端基于vue，服务端基于node搭建

## 项目搭建

### 前端

1. 首先下载安装node.js
2. 全局安装vue和vue-cli
	``` js
    npm install --global vue
    npm install --global vue-cli
    ```
3. webpack + vue-cli 新建项目,运行 `vue init webpack` ，然后一路enter，yes enter即可在打开的当前目录下初始化一个vue项目，结果如下图所示：
	![img](http://opzww7anw.bkt.clouddn.com/mk/image/webpackinit.png)
4. 测试运行，当前目录下依次运行 `npm install` 安装依赖项， `npm run dev` 启动项目,如无依赖项安装失败，端口本地端口8080被占等情况，项目即可运行，如下图所示：
	![img](http://opzww7anw.bkt.clouddn.com/mk/image/npmrundev.png)

### 服务端

1. 项目根目录下新建server文件夹
2. 安装express与body-parser,server文件夹下运行以下命令
	``` js
    npm install express --save
    npm install body-parser --save
    ```
3. server文件夹下新建index.js文件与api.js文件

至此，项目文件结构搭建完毕

## 配置前后端通信环境


