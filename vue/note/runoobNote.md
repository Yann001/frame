# Vue.js Study（runoob)

>根据RUNOOB.COM MongoDB教程整理
>网址：http://www.runoob.com/vue2/vue-tutorial.html

**目录**

[TOC]

## Vue.js 安装
#### 1. 独立版本
我们可以在 Vue.js 的官网上直接下载 vue.min.js 并用<**script**>标签引入。
[下载Vue.js](https:vuejs.org/js/vue.min.js)
#### 2. 使用CDN方法
以下推荐国外比较稳定的两个 CDN，国内还没发现哪一家比较好，目前还是建议下载到本地。
- BootCDN（国内） : https://cdn.bootcss.com/vue/2.2.2/vue.min.js
- unpkg：https://unpkg.com/vue/dist/vue.js, 会保持和 npm 发布的最新的版本一致。
- cdnjs : https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.8/vue.min.js

#### 3. NPM 方法
由于 npm 安装速度慢，本教程使用了淘宝的镜像及其命令 cnpm
npm 版本需要大于 3.0，如果低于此版本需要升级它：
```js
# 查看版本
$ npm -v
2.3.0

#升级 npm
cnpm install npm -g
```
在用 Vue.js 构建大型应用时推荐使用 NPM 安装：
```js
# 最新稳定版
$ cnpm install vue
```
#### 命令行工具
Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。
```js
# 全局安装 vue-cli
$ cnpm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 这里需要进行一些配置，默认回车即可
This will install Vue 2.x version of the template.

For Vue 1.x use: vue init webpack#1.0 my-project

? Project name my-project
? Project description A Vue.js project
? Author runoob <test@runoob.com>
? Vue build standalone
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? Yes

   vue-cli · Generated "my-project".

   To get started:

     cd my-project
     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack
```
进入项目，安装并运行：
*注意：默认监听8080端口，如端口被别的程序占用，run dev会失败*
```js
$ cd my-project
$ cnpm install
$ cnpm run dev
 DONE  Compiled successfully in 4388ms

> Listening at http://localhost:8080
```
成功执行以上命令后访问 http://localhost:8080/，输出结果如下所示：

![img](http://i2.muimg.com/567571/b52dd736b69d8a2e.jpg)

*注意：Vue.js 不支持 IE8 及其以下 IE 版本。*

## Vue.js 目录结构
上一章节中我们使用了 npm 安装项目，我们在 IDE中打开该目录，结构如下所示：

![img](http://i2.muimg.com/567571/56152d9fe44bf554.jpg)

**目录解析**

|目录/文件|说明
|--|--
|bulid|最终发布的代码存放位置。
|config	|配置目录，包括端口号等。我们初学可以使用默认的。
|node_modules|npm 加载的项目依赖模块
|src|这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：1. assets: 放置一些图片，如logo等。2. components: 目录里面放了一个组件文件，可以不用。3. App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。4. main.js: 项目的核心文件。
|static|静态资源目录，如图片、字体等。
|test|初始测试目录，可删除
|.xxxx文件|这些是一些配置文件，包括语法配置，git配置等。
|index.html|首页入口文件，你可以添加一些 meta 信息或同统计代码啥的。
|package.json|项目配置文件。
|README.md|项目的说明文档，markdown 格式

## Vue.js模板语法
Vue.js 使用了基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。
Vue.js 的核心是一个允许你采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统。
结合响应系统，在应用状态改变时，Vue能够智能地计算出重新渲染组件的最小代价并应用到 DOM 操作上
#### 插值
##### 文本
数据绑定最常见的形式就是使用 {{...}}（双大括号）的文本插值：

```xml
<div id="app">
    <p>{{ message }}</p>
</div>
```
##### Html
使用 v-html 指令用于输出 html 代码：
```xml
<!--v-html指令-->
<div id="app">
    <div v-html="message"></div>
</div>
<script>
    new Vue({
      el: '#app',
      data: {
        message: '<h1>菜鸟教程</h1>'
      }
    })
</script>
```
#### 属性
HTML 属性中的值应使用 v-bind 指令。
以下实例判断 class1 的值，如果为 true 使用 class1 类的样式，否则不使用该类：
```xml
<!--v-bind指令-->
<div id="app">
  <label for="r1">修改颜色</label><input type="checkbox" v-model="class1" id="r1">
  <br><br>
  <div v-bind:class="{'class1': class1}">
    directiva v-bind:class
  </div>
</div>
<script>
new Vue({
    el: '#app',
  data:{
      class1: false
  }
});
</script>
```
#### 表达式
Vue.js 都提供了完全的 JavaScript 表达式支持。
```xml
<!--javaScript表达式-->
<div id="app">
    {{5+5}}<br>
    {{ ok ? 'YES' : 'NO' }}<br>
    {{ message.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id">菜鸟教程</div>
</div>
<script>
new Vue({
  el: '#app',
  data: {
    ok: true,
    message: 'RUNOOB',
    id : 1
  }
})
</script>
```
#### 指令
指令是带有 v- 前缀的特殊属性。
指令用于在表达式的值改变时，将某些行为应用到 DOM 上。
```xml
<div id="app">
    <p v-if="seen">现在你看到我了</p>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    seen: true
  }
})
</script>
```
这里， v-if 指令将根据表达式 seen 的值(true 或 false )来决定是否插入 p 元素。
参数
#### 参数
参数在指令后以冒号指明。例如， v-bind 指令被用来响应地更新 HTML 属性：
```xml
<div id="app">
    <pre><a v-bind:href="url">菜鸟教程</a></pre>
    <!--在这里参数是监听的事件名-->
    <a v-on:click="doSomething">
</div>

<script>
new Vue({
  el: '#app',
  data: {
    url: 'http://www.runoob.com'
  }
})
</script>
```
#### 修饰符
修饰符是以半角句号 . 指明的特殊后缀，用于指出一个指定应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
```xml
<form v-on:submit.prevent="onSubmit"></form>
```
#### 用户输入
在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定：
```xml
<div id="app">
    <p>{{ message }}</p>
    <input v-model="message">
</div>
<script>
new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  }
})
</script>
```
按钮的事件我们可以使用 v-on 监听事件，并对用户的输入进行响应。
以下实例在用户点击按钮后对字符串进行反转操作：
```xml
<!--字符串反转-->
<div id="app">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转字符串</button>
</div>
<script>
new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
</script>
```
#### 过滤器
Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。由"管道符"指示, 格式如下：
```xml
<!-- 在两个大括号中 -->
{{ message | capitalize }}
<!-- 在 v-bind 指令中 -->
<div v-bind:id="rawId | formatId"></div>
```
过滤器函数接受表达式的值作为第一个参数。
以下实例对输入的字符串第一个字母转为大写：
```xml

<div id="app">
  {{ message | capitalize }}
</div>
<script>
new Vue({
  el: '#app',
  data: {
    message: 'runoob'
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
</script>
```
过滤器可以串联：
```xml
{{ message | filterA | filterB }}
```
过滤器是 JavaScript 函数，因此可以接受参数：
```xml
{{ message | filterA('arg1', arg2) }}
```
这里，message 是第一个参数，字符串 'arg1' 将传给过滤器作为第二个参数， arg2 表达式的值将被求值然后传给过滤器作为第三个参数。
#### 缩写
**v-bind 缩写**
Vue.js 为两个最为常用的指令提供了特别的缩写：
```xml
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
```
**v-on 缩写**
```xml
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
```
#### Vue 实例
##### 构造器
每个 Vue.js 应用都是通过构造函数 Vue 创建一个 Vue 的根实例来启动的：
```js
var vm = new Vue({
  // 选项
})
```
##### 属性与方法
每个 Vue 实例都会代理其 data 对象里所有的属性：
```js
var data = { a: 1 }
var vm = new Vue({
  data: data
})
vm.a === data.a // -> true
// 设置属性也会影响到原始数据
vm.a = 2
data.a // -> 2
// ... 反之亦然
data.a = 3
vm.a // -> 3
```
除了 data 属性， Vue 实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 $，以便与代理的 data 属性区分。例如：
```js
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})
vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true
// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
  // 这个回调将在 `vm.a`  改变后调用
})
```
