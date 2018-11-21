const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');



const port = process.env.PORT || 3000;
const publicPath =path.join(__dirname,'..\\public');
var app=express();


var server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection',(socket)=>{
  console.log('New user connected');

  socket.emit('newEmail',{
    from:'mike@example.com',
    text:'Hey.What is going on',
    createdAt:333
  });


  socket.on('createEmail',(newEmail)=>{
    console.log('createEmail',newEmail);
  });

  socket.on('disconnect',()=>{
    console.log('User was diconnected');
  });


  socket.on('createMessage',(message)=>{
    console.log('createMessage: ',message);
  });


  socket.emit('newMessage',{
    from:'server',
    text:'message'
  });


});

server.listen(port,()=>{
  console.log(`server is listening on ${port}`);
});
