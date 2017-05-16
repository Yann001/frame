const express = require('express');
const app = express();
// const router = express.Router();

// // 接收get请求
// router.get('api/test/getData', (req, res) => {
//   let getParams = req.body.params;
// });

// // 接收post请求
// router.post('api/test/addData', (req, res) => {
//   let postParams = req.body.params;
// });

// 接收get请求
app.get('api/test/getData', (req, res) => {
  let getParams = req.body.params;
});

// 接收post请求
app.post('api/test/addData', (req, res) => {
  let postParams = req.body.params;
});

