# Angular JS2 Study Note（runoob)

>根据RUNOOB.COM Angular JS2 教程整理
>网址：http://www.runoob.com/angularjs2/angularjs2-tutorial.html

**目录**

[TOC]

## Angular2 简介

### Angular2.x与Angular1.x 的区别

Angular2.x与Angular1.x 的区别类似 Java 和 JavaScript 或者说是雷锋与雷峰塔的区别，所以在学习Angular2.x时大家需要做好重新学习一门语言的心里准备。

### 运行条件

由于目前各种环境（浏览器或 Node）暂不支持ES6的代码，所以需要一些shim和polyfill（IE需要）让ES6写的代码能够转化为ES5形式并可以正常运行在浏览器中。

![](http://i2.muimg.com/567571/e690b58fc963a099.jpg)

从上图可以看出在 Es5 浏览器下需要以下模块加载器：
- systemjs - 通用模块加载器，支持AMD、CommonJS、ES6等各种格式的JS模块加载。
- es6-module-loader - ES6模块加载器，systemjs会自动加载这个模块。
- traceur - ES6转码器，将ES6代码转换为当前浏览器支持的ES5代码，systemjs会自动加载 这个模块。




