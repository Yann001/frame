// 引入express
const express = require('express');
// 引入处理post数据的模块
const bodyParser = require('body-parser');
// 引入编写好的api
const api = require('./api');
// 初始化express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);

app.listen(8088);
console.log('success listen port 8088 ......');
