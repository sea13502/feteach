# 第一个vue程序
启动我们在以前课程中学的http-server。
然后插入下面代码
```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
然后就可以使用vue进行我们第一个vue程序了。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>first vue</title>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
  <div id="app">
    {{ message }}
  </div>
  <script>
    var app = new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!'
      }
    })
  </script>
</body>
</html>
```
这段代码就是我们的第一段vue代码,这段代码的意思就是把我们js中的数据绑定到html中。关键点就是我们的==vue对象==，vue框架的一些方法都是在这个对象里面展开的。
---
然后我们讲一个vue中一个比较关键的概念绑定。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>first vue</title>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
  <div id="app-2">
    <span v-bind:title="message">
      {{showtext}}
    </span>
  </div>
  <script>
    var app2 = new Vue({
      el: '#app-2',
      data: {
        message: '页面加载于 ' + new Date().toLocaleString(),
        showtext: '鼠标悬停几秒钟查看此处动态绑定的提示信息！'
      }
    })
  </script>
</body>
</html>
```
我们再vue对象app2中的data属性中定义了两个对象，然后将他们绑定到页面上，然后再浏览器控制台通过，app2这个对象可以访问并修改message和showtext两个变量。如下所示
```javascript
app2.message = "hello";
app2.showtext = "world";
```
然后我们就可以观察到，页面上的tooltip和显示文字都相应的变化了，这就叫变量的双向绑定。