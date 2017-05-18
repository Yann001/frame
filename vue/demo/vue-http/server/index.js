// 引入express
const express = require('express');
// 引入处理post数据的模块
const bodyParser = require('body-parser');
// 
const path = require('path');
// 
const fs = require('fs');
// 引入编写好的api
const api = require('./api');
// 初始化express
const app = express();

// 注册中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);

app.use(express.static(path.resolve(__dirname, '../dist')))
// 因为是单页应用 所有请求都走/dist/index.html
// app.get('*', function(req, res) {
//     const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
//     res.send(html);
// })

app.listen(8088);
console.log('success listen port 8088 ......');
