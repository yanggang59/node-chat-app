const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage,generateLocationMessage} = require('./utils/message');

const port = process.env.PORT || 3000;
const publicPath =path.join(__dirname,'..\\public');
var app=express();


var server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection',(socket)=>{
  console.log('New user connected');

  //socket.emit from admin text welcome to the chat app
  socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app'));


  //socket.broadcast.emit from admin text:New user joined
  //socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'));



  socket.on('createMessage',(message,callback) => {
    console.log('createMessage:',message);
    io.emit('newMessage',generateMessage(message.from,message.text));
    try{
        callback('This is from the server');
    }catch(e)
    {
      console.log('something wrong');
    }

    socket.on('createLocationMessage',(coords)=>{
      io.emit('newLocationMessage',generateLocationMessage('Admin',coords.latitude,coords.longitude));
    })
  });

  socket.on('disconnect',()=>{
    console.log('User was diconnected');
  });

  });


server.listen(port,()=>{
  console.log(`server is listening on ${port}`);
});
