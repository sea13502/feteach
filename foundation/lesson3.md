# 零基础入门前端第三课 http-server的使用
&emsp;&emsp;做软件开发，首先要形成项目的概念，一个文件夹就可以是一个项目。

&emsp;&emsp;然后就是要学会查看文档，一般的项目的文档都是[github.com](https://www.github.com)。在github搜索栏里面输入http-server,然后就可以搜索到这个软件的项目地址了，地址如下[http-server](https://github.com/indexzero/http-server)。然后就可以学习一些这个软件的常用命令了。

&emsp;&emsp;上一课中我们学习了node安装，node安装好，我们就可以在命令行里面使用npm了。下面要介绍的一个命令就是
```javascript
npm init
```
&emsp;&emsp;然后没有特殊需求的化，一个node的项目就建立好了。
&emsp;&emsp;然后全局安装http-server
```javascript
npm install http-server -g
```
&emsp;&emsp;然后我们建立一个文件夹，建立我们第一个项目中第一个文件 hello.html,然后把我们第一课的代码粘贴进来。
&emsp;&emsp;然后再windows里面打开cmd命令行工具。然后输入
```javascript
http-server
```
然后就会显示出
```
Starting up http-server, serving ./
Available on:
  http://192.168.12.103:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```
&emsp;&emsp;根据提示就可以在浏览器里面，访问
```
http://127.0.0.1:8080/hello.html
```
因为我们刚才建立的是html文件名叫做 hello.html,然后就可以看到我刚才建立hello world网页了。
- 如有疑问请加下面的微信
- 微信号：1649750498
- 或扫描二维码
- ![微信](https://gitee.com/uploads/images/2018/0327/160011_4c3d56ae_888337.jpeg "WechatIMG15.jpg")