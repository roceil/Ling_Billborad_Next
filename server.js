const http = require("http");
const Room = require("./models/room");
const mongoose = require('mongoose');
// 連接資料庫
mongoose.connect('mongodb://localhost:27017/hotel')
    .then(()=>{
        console.log('資料庫連線成功')
    })
    .catch((error)=>{
        console.log(error);
    });


// 開頭字小寫
// 強制加上 s
// Room.create(
//     {
//         name: "總統超級單人房2",
//         price: 200,
//         rating: 4.5
//     }
// ).then(()=>{
//     console.log("資料寫入成功");
// }).catch(error=>{
//     console.log(error.errors);
// })

const requestListener = async (req,res)=>{
    const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
        'Content-Type': 'application/json'
    }
    if(req.url=="/rooms" && req.method=="GET"){
        const rooms = await Room.find();
        res.writeHead(200,headers);
        res.write(JSON.stringify({
            "status":"success",
            rooms
        }))
        res.end()
    }
}

const server = http.createServer(requestListener);
server.listen(3005);