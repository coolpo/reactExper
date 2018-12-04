# reactExper
一个从头撸起的react项目尝试。
### 接着更新
> 建这个仓库的意义就是为了从头撸一个React开发的webpack配置出来，结果东西越做越多(这点稍后会提到)。开始立项的时候，webpack更新至4，React更新至16，React-router更新至4，这里用到了最新的配置，虽然不知道你看的时候是什么版本。
-------
## 第一步：建仓并初始化你的配置单
```
 mkdir reactExper && cd reactExper  // 新建文件夹并进入新建文件夹 就是你的‘仓库’
 npm init // 初始化配置单 package.json 文件
```
**tips:这些操作的前置条件是你已经安装了node。(好吧，我默认你是安装的。Good luck!)**
## 第二步：准备webpack、webpack配置文件、入口文件，
```
 npm install --save-dev webpack webpack-cli
```
- 根目录下新建`webpack.config.js`
- 编辑`webpack.config.js`文件，添加代码
```javascript
  const path = require('path'); // node 默认模块
  modules.export = {
    // 配置入口文件
    entry: './src/index.js', // 入口文件放在根目录还是其他目录任意，你开心就好
    // 配置出口文件
    output: {
      path: path.join(__dirname, "/dist"), // 输出地址
      filename: "[name].[hash].js" // 输出文件的一丢丢小心机
    }
  }
```
**tips:这里值得注意的地方有几个：path.join(); filename配置; 如果有疑问请自行Google.**
- 按照我们入口文件的路径，新建`index.js`入口文件
## 第三步：正式介入React
- 安装react、react-dom

```npm install --save react react-dom```
- 在新建的入口文件`index.js`中添加如下代码
```javascript
  import React from 'react';
  import ReactDom from 'react-dom';

  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('app')
  );
```
- 在src中新建`index.html`
```html
<!DOCTYPE html>
<html lang="zh-CN" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>hi, React</title>
</head>

<body>
  <div id='app'></div>
</body>

</html>
```

### 未完待续
> 这次先到这里，找时间回来接着更新
