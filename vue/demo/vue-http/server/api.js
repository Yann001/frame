const express = require('express');
const app = express();
const router = express.Router();

// 接收get请求
router.get('api/test/getData', (req, res) => {
  console.log(req);
  let getParams = req.body.params;
  res.send('You send a get, i have recived!');
});

// 接收post请求
router.post('api/test/addData', (req, res) => {
  let postParams = req.body.params;
});

// 接收get请求
// app.get('api/test/getData', (req, res) => {
//   console.log(req);
//   let getParams = req.body.params;
//   res.send('You send a get, i have recived!');
// });

// // 接收post请求
// app.post('api/test/addData', (req, res) => {
//   let postParams = req.body.params;
// });

module.exports = router
