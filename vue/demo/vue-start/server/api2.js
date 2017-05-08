const models = require('./mongo/models');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api2/registry/createAccount',(req, res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newAccount = new models.registryModel({
        username : req.body.username,
        password : req.body.password,
        sex : req.body.sex,
        birthday : req.body.birthday,
        tel : req.body.tel,
        email : req.body.email
    });
    console.log([req.body.username,req.body.password,req.body.sex]);
    // 保存数据newAccount数据进mongoDB
    newAccount.save((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed' + data);
        }
    });
});
// 获取已有账号接口
router.get('/api2/login/getAccount',(req, res) => {
    // 通过模型去查找数据库
    models.registryModel.registryModel({}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
