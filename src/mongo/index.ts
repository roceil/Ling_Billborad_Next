// // 引入相關套件
// const express = require('express');
// const mongoose = require('mongoose');

// // 建立Express應用程式
// const app = express();

// // 連接MongoDB資料庫
// mongoose.connect('mongodb+srv://a0978006326:ff1720651@cluster0.q0mgtuh.mongodb.net/ling', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB連接成功'))
//   .catch((err: any) => console.log(err));

// // 定義資料庫Schema
// const itemSchema = new mongoose.Schema({
//   itemName: {
//     type: String,
//     required: [true, '名稱為必填欄位'],
//   },
//   price: {
//     type: Number,
//     required: [true, '價格為必填欄位'],
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     select: false,
//   },
//   changedAt: {
//     type: Date,
//     default: Date.now,
//     select: false,
//   },
// }, {
//   versionKey: false,
// });

// // 建立資料庫模型
// const SaleItem = mongoose.model('SaleItem', itemSchema);

// // 建立資料
// const item1 = new SaleItem({
//   itemName: '鐵',
//   price: 10,
// });

// // 儲存資料
// item1.save()
//   .then(() => console.log('資料儲存成功'))
//   .catch((err: any) => console.log(err));


// // 設定路由
// app.get('/', (req: any, res: any) => {
//   res.send('Hello World');
// });

// // 啟動server
// app.listen(3000, () => {
//   console.log('Server已啟動');
// });
