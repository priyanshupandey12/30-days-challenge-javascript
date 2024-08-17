const http=require('http');
const express=require('express');
const app=express();
const {Server}=require('socket.io');
const server=http.createServer(app);

const io=new Server(server);

io.on('connection',(socket)=>{
 socket.on('message',(data)=>{
  io.emit('message',data)
  console.log(data.username,data.message)
 })
})

app.use(express.static('public'));

app.get('/',(req,res)=>{
  return res.sendFile('./public/index.html');
})
server.listen(3000,()=>{
  console.log('server is running on port 3000');
})