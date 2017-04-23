# jquery 基本教程

>根据w3school在线教程整理
>在线地址：http://www.w3school.com.cn/jquery/index.asp

**目录**

[TOC]

## jQuery 语法

通过 jQuery，您可以选取（查询，query） HTML 元素，并对它们执行“操作”（actions）。
**jQuery 语法**
jQuery 语法是为 HTML 元素的选取编制的，可以对元素执行某些操作。
基础语法是：$(selector).action()
- 美元符号定义 jQuery
- 选择符（selector）“查询”和“查找” HTML 元素
- jQuery 的 action() 执行对元素的操作

示例
- $(this).hide() - 隐藏当前元素
- $("p").hide() - 隐藏所有段落
- $(".test").hide() - 隐藏所有 class="test" 的所有元素
- $("#test").hide() - 隐藏所有 id="test" 的元素

提示：jQuery 使用的语法是 XPath 与 CSS 选择器语法的组合。
**文档就绪函数**
jQuery 函数位于一个 document ready 函数中：
```js
$(document).ready(function(){
	// jQuery functions go here
});
```
这是为了防止文档在完全加载（就绪）之前运行 jQuery 代码。
如果在文档没有完全加载之前就运行函数，操作可能失败。下面是两个具体的例子：
- 试图隐藏一个不存在的元素
- 获得未完全加载的图像的大小

## jQuery 选择器

jQuery 元素选择器和属性选择器允许您通过标签名、属性名或内容对 HTML 元素进行选择。
选择器允许您对 HTML 元素组或单个元素进行操作。
在 HTML DOM 术语中：
选择器允许您对 DOM 元素组或单个 DOM 节点进行操作。

**jQuery 元素选择器**
jQuery 使用 CSS 选择器来选取 HTML 元素。
$("p") 选取 < p > 元素。
$("p.intro") 选取所有 class="intro" 的 < p > 元素。
$("p#demo") 选取所有 id="demo" 的 < p > 元素。
**jQuery 属性选择器**
jQuery 使用 XPath 表达式来选择带有给定属性的元素。
$("[href]") 选取所有带有 href 属性的元素。
$("[href='#']") 选取所有带有 href 值等于 "#" 的元素。
$("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。
$("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。
**更多的选择器实例**

|语法	|描述
|--
|$(this)	|当前 HTML 元素
|$("p")	|所有 <p> 元素
|$("p.intro")	|所有 class="intro" 的 <p> 元素
|$(".intro")	|所有 class="intro" 的元素
|$("#intro")	|id="intro" 的元素
|$("ul li:first")	|每个 < ul> 的第一个 < li> 元素
|$("[href$='.jpg']")	|所有带有以 ".jpg" 结尾的属性值的 href 属性
|$("div#intro .head")	|id="intro" 的 <div> 元素中的所有 class="head" 的元素
**jQuery 选择器参考手册**

|选择器	|实例	|选取
|--
|*	|$("*")	|所有元素
|#id	|$("#lastname")	|id="lastname" 的元素
|.class	|$(".intro")	|所有 class="intro" 的元素
|element	|$("p")	|所有 < p> 元素
|.class.class	|$(".intro.demo")	|所有 class="intro" 且 class="demo" 的元素
| | | |
|:first	|$("p:first")	|第一个 < p> 元素
|:last	|$("p:last")	|最后一个 < p> 元素
|:even	|$("tr:even")	|所有偶数 < tr> 元素
|:odd	|$("tr:odd")	|所有奇数 < tr> 元素
| |	| |
|:eq(index)	|$("ul li:eq(3)")	|列表中的第四个元素（index 从 0 开始）
|:gt(no)	|$("ul li:gt(3)")	|列出 index 大于 3 的元素
|:lt(no)	|$("ul li:lt(3)")	|列出 index 小于 3 的元素
|:not(selector)	|$("input:not(:empty)")	|所有不为空的 input 元素
| |	| |
|:header	|$(":header")	|所有标题元素 < h1> - < h6>
|:animated	|$(":animated") 	|所有动画元素
| |	| |
|:contains(text)	|$(":contains('W3School')")	|包含指定字符串的所有元素
|:empty	|$(":empty")	|无子（元素）节点的所有元素
|:hidden	|$("p:hidden")	|所有隐藏的 < p> 元素
|:visible	|$("table:visible")	|所有可见的表格
| |	| |
|s1,s2,s3	|$("th,td,.intro")	|所有带有匹配选择的元素
| |	| |
|[attribute]	|$("[href]")	|所有带有 href 属性的元素
|[attribute=value]	|$("[href='#']")	|所有 href 属性的值等于 "#" 的元素
|[attribute!=value]	|$("[href!='#']")	|所有 href 属性的值不等于 "#" 的元素
|[attribute$=value]	|$("[href$='.jpg']")	|所有 href 属性的值包含以 ".jpg" 结尾的元素
| |	| |
|:input	|$(":input")	|所有 < input> 元素
|:text	|$(":text")	|所有 type="text" 的 < input> 元素
|:password	|$(":password")	|所有 type="password" 的 < input> 元素
|:radio	|$(":radio")	|所有 type="radio" 的 < input> 元素
|:checkbox	|$(":checkbox")	|所有 type="checkbox" 的 < input> 元素
|:submit	|$(":submit")	|所有 type="submit" 的 < input> 元素
|:reset	|$(":reset")	|所有 type="reset" 的 < input> 元素
|:button	|$(":button")	|所有 type="button" 的 < input> 元素
|:image	|$(":image")	|所有 type="image" 的 < input> 元素
|:file	|$(":file")	|所有 type="file" 的 < input> 元素
| |	| |
|:enabled	|$(":enabled")	|所有激活的 input 元素
|:disabled	|$(":disabled")	|所有禁用的 input 元素
|:selected	|$(":selected")	|所有被选取的 input 元素
|:checked	|$(":checked")	|所有被选中的 input 元素

## jQuery 事件

**jQuery 是为事件处理特别设计的。**
**jQuery 事件函数**
jQuery 事件处理方法是 jQuery 中的核心函数。
事件处理程序指的是当 HTML 中发生某些事件时所调用的方法。术语由事件“触发”（或“激发”）经常会被使用。
**jQuery 名称冲突**
jQuery 使用 $ 符号作为 jQuery 的简介方式。
某些其他 JavaScript 库中的函数（比如 Prototype）同样使用 $ 符号。
jQuery 使用名为 noConflict() 的方法来解决该问题。
var jq=jQuery.noConflict()，帮助您使用自己的名称（比如 jq）来代替 $ 符号。
由于 jQuery 是为处理 HTML 事件而特别设计的，那么当您遵循以下原则时，您的代码会更恰当且更易维护：
- 把所有 jQuery 代码置于事件处理函数中
- 把所有事件处理函数置于文档就绪事件处理器中
- 把 jQuery 代码置于单独的 .js 文件中
- 如果存在名称冲突，则重命名 jQuery 库

**jQuery 事件方法**
事件方法会触发匹配元素的事件，或将函数绑定到所有匹配元素的某个事件。
触发实例：
```js
$("button#demo").click()
```
上面的例子将触发 id="demo" 的 button 元素的 click 事件。
绑定实例：
```js
$("button#demo").click(function(){$("img").hide()})
```
上面的例子会在点击 id="demo" 的按钮时隐藏所有图像。
**jQuery 事件参考手册

|**方法**	|**描述**
|--
|bind()	|向匹配元素附加一个或更多事件处理器
|blur()	|触发、或将函数绑定到指定元素的 blur 事件
|change()	|触发、或将函数绑定到指定元素的 change 事件
|click()	|触发、或将函数绑定到指定元素的 click 事件
|dblclick()	|触发、或将函数绑定到指定元素的 double click 事件
|delegate()	|向匹配元素的当前或未来的子元素附加一个或多个事件处理器
|die()	|移除所有通过 live() 函数添加的事件处理程序。
|error()	|触发、或将函数绑定到指定元素的 error 事件
|event.isDefaultPrevented()	|返回 event 对象上是否调用了 event.preventDefault()。
|event.pageX	|相对于文档左边缘的鼠标位置。
|event.pageY	|相对于文档上边缘的鼠标位置。
|event.preventDefault()	|阻止事件的默认动作。
|event.result	|包含由被指定事件触发的事件处理器返回的最后一个值。
|event.target	|触发该事件的 DOM 元素。
|event.timeStamp	|该属性返回从 1970 年 1 月 1 日到事件发生时的毫秒数。
|event.type	|描述事件的类型。
|event.which	|指示按了哪个键或按钮。
|focus()	|触发、或将函数绑定到指定元素的 focus 事件
|keydown()	|触发、或将函数绑定到指定元素的 key down 事件
|keypress()	|触发、或将函数绑定到指定元素的 key press 事件
|keyup()	|触发、或将函数绑定到指定元素的 key up 事件
|live()	|为当前或未来的匹配元素添加一个或多个事件处理器
|load()	|触发、或将函数绑定到指定元素的 load 事件
|mousedown()	|触发、或将函数绑定到指定元素的 mouse down 事件
|mouseenter()	|触发、或将函数绑定到指定元素的 mouse enter 事件
|mouseleave()	|触发、或将函数绑定到指定元素的 mouse leave 事件
|mousemove()	|触发、或将函数绑定到指定元素的 mouse move 事件
|mouseout()	|触发、或将函数绑定到指定元素的 mouse out 事件
|mouseover()	|触发、或将函数绑定到指定元素的 mouse over 事件
|mouseup()	|触发、或将函数绑定到指定元素的 mouse up 事件
|one()	|向匹配元素添加事件处理器。每个元素只能触发一次该处理器。
|ready()	|文档就绪事件（当 HTML 文档就绪可用时）
|resize()	|触发、或将函数绑定到指定元素的 resize 事件
|scroll()	|触发、或将函数绑定到指定元素的 scroll 事件
|select()	|触发、或将函数绑定到指定元素的 select 事件
|submit()	|触发、或将函数绑定到指定元素的 submit 事件
|toggle()	|绑定两个或多个事件处理器函数，当发生轮流的 click 事件时执行。
|trigger()	|所有匹配元素的指定事件
|triggerHandler()	|第一个被匹配元素的指定事件
|unbind()	|从匹配元素移除一个被添加的事件处理器
|undelegate()	|从匹配元素移除一个被添加的事件处理器，现在或将来
|unload()	|触发、或将函数绑定到指定元素的 unload 事件

## jQuery 效果
隐藏、显示、切换，滑动，淡入淡出，以及动画。
### 隐藏和显示
**语法：**
```js
$(selector).hide(speed,callback);
$(selector).show(speed,callback);
```
可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是隐藏或显示完成后所执行的函数名称。
下面的例子演示了带有 speed 参数的 hide() 方法：
**实例**
```js
$("button").click(function(){
  $("p").hide(1000);
});
```
jQuery toggle()
通过 jQuery，您可以使用 toggle() 方法来切换 hide() 和 show() 方法。
显示被隐藏的元素，并隐藏已显示的元素.
**语法：**
```js
$(selector).toggle(speed,callback);
```
可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是 toggle() 方法完成后所执行的函数名称。
**实例**
```js
$("button").click(function(){
  $("p").toggle();
});
```

### 淡入淡出

jQuery Fading 方法
通过 jQuery，您可以实现元素的淡入淡出效果。
jQuery 拥有下面四种 fade 方法：
- fadeIn()
- fadeOut()
- fadeToggle()
- fadeTo()

**语法**
```js
$(selector).fadeIn(speed,callback);
$(selector).fadeOut(speed,callback);
$(selector).fadeToggle(speed,callback);
```
可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是 fading 完成后所执行的函数名称。
```js
$(selector).fadeTo(speed,opacity,callback);
```
必需的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。
可选的 callback 参数是该函数完成后所执行的函数名称。

### 滑动

jQuery 滑动方法
通过 jQuery，您可以在元素上创建滑动效果。
jQuery 拥有以下滑动方法：
- slideDown()
- slideUp()
- slideToggle()

**语法：**
```js
$(selector).slideDown(speed,callback);
$(selector).slideUp(speed,callback);
$(selector).slideToggle(speed,callback);
```
可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是滑动完成后所执行的函数名称。

### 动画
**jQuery animate() 方法允许您创建自定义的动画。**
**语法：**
```js
$(selector).animate({params},speed,callback);
```
必需的 params 参数定义形成动画的 CSS 属性。
可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是动画完成后所执行的函数名称。
**jQuery animate() - 操作多个属性**
请注意，生成动画的过程中可同时使用多个属性：
**实例**
```js
$("button").click(function(){
  $("div").animate({
    left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'
  });
});
```
**提示**
可以用 animate() 方法来操作所有 CSS 属性吗？
是的，几乎可以！不过，需要记住一件重要的事情：当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名，比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。
同时，色彩动画并不包含在核心 jQuery 库中。
如果需要生成颜色动画，您需要从 jQuery.com 下载 Color Animations 插件。
**jQuery animate() - 使用相对值**
也可以定义相对值（该值相对于元素的当前值）。需要在值的前面加上 += 或 -=：
**实例**
```js
$("button").click(function(){
  $("div").animate({
    left:'250px',
    height:'+=150px',
    width:'+=150px'
  });
});
```
**jQuery animate() - 使用预定义的值**
您甚至可以把属性的动画值设置为 "show"、"hide" 或 "toggle"：
**实例**
```js
$("button").click(function(){
  $("div").animate({
    height:'toggle'
  });
});
```
**jQuery animate() - 使用队列功能**
默认地，jQuery 提供针对动画的队列功能。
这意味着如果您在彼此之后编写多个 animate() 调用，jQuery 会创建包含这些方法调用的“内部”队列。然后逐一运行这些 animate 调用。
**实例 1**
隐藏，如果您希望在彼此之后执行不同的动画，那么我们要利用队列功能：
```js
$("button").click(function(){
  var div=$("div");
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
});
```
**实例 2**
下面的例子把 <div> 元素移动到右边，然后增加文本的字号：
```js
$("button").click(function(){
  var div=$("div");
  div.animate({left:'100px'},"slow");
  div.animate({fontSize:'3em'},"slow");
});
```
### 停止动画
jQuery stop() 方法用于在动画或效果完成前对它们进行停止。
**语法**
```js
$(selector).stop(stopAll,goToEnd);
```
可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
因此，默认地，stop() 会清除在被选元素上指定的当前动画。
### Callback 函数
Callback 函数在当前动画 100% 完成之后执行。
由于 JavaScript 语句（指令）是逐一执行的 - 按照次序，动画之后的语句可能会产生错误或页面冲突，因为动画还没有完成。
为了避免这个情况，您可以以参数的形式添加 Callback 函数。当动画 100% 完成后，即调用 Callback 函数。
### Chaining
通过 jQuery，您可以把动作/方法链接起来。
Chaining 允许我们在一条语句中允许多个 jQuery 方法（在相同的元素上）。
*提示：这样的话，浏览器就不必多次查找相同的元素。*
例子 1
下面的例子把 css(), slideUp(), and slideDown() 链接在一起。"p1" 元素首先会变为红色，然后向上滑动，然后向下滑动：
```js
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
```
如果需要，我们也可以添加多个方法调用。
提示：当进行链接时，代码行会变得很差。不过，jQuery 在语法上不是很严格；您可以按照希望的格式来写，包含折行和缩进。
例子 2
这样写也可以运行：
```js
$("#p1").css("color","red")
  .slideUp(2000)
  .slideDown(2000);
```
jQuery 会抛掉多余的空格，并按照一行长代码来执行上面的代码行。

**jQuery 效果参考手册**

|**方法**	|**描述**
|--
|animate()	|对被选元素应用“自定义”的动画
|clearQueue()	|对被选元素移除所有排队的函数（仍未运行的）
|delay()	|对被选元素的所有排队函数（仍未运行）设置延迟
|dequeue()	|运行被选元素的下一个排队函数
|fadeIn()	|逐渐改变被选元素的不透明度，从隐藏到可见
|fadeOut()	|逐渐改变被选元素的不透明度，从可见到隐藏
|fadeTo()	|把被选元素逐渐改变至给定的不透明度
|hide()	|隐藏被选的元素
|queue()	|显示被选元素的排队函数
|show()	|显示被选的元素
|slideDown()	|通过调整高度来滑动显示被选元素
|slideToggle()	|对被选元素进行滑动隐藏和滑动显示的切换
|slideUp()	|通过调整高度来滑动隐藏被选元素
|stop()	|停止在被选元素上运行动画
|toggle()	|对被选元素进行隐藏和显示的切换



