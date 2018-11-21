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

  //socket.emit from admin text welcome to the chat app
  socket.emit('newMessage',{
    from:'Admin',
    text:'Welcome to the chat app'
  });


  //socket.broadcast.emit from admin text:New user joined
  socket.broadcast.emit('newMessage',{
    from:'Admin',
    text:'New user joined',
    createdAt:new Date().getTime()
  });



  socket.on('createMessage',(message)=>{
    console.log('createMessage: ',message);
    io.emit('newMessage',{
      form:message.from,
      text:message.text,
      createdAt:new Date().getTime()
    });

    // socket.broadcast.emit('newMessage',{
    //     form:message.from,
    //     text:message.text,
    //     createdAt:new Date().getTime()
    // });

  });

  socket.on('disconnect',()=>{
    console.log('User was diconnected');
  });

  });


server.listen(port,()=>{
  console.log(`server is listening on ${port}`);
});
