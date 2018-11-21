var socket = io();
socket.on('connect',function (){
  console.log('connected to server');


  socket.emit('createEmail',{
    to:'mike@example.com',
    text:'great'
  });

});

socket.on('disconnect',function (){
  console.log('Disconnected from server');
});

socket.on('newEmail',function (email){
  console.log('New Email',email);
});


socket.on('newMessage',function (newMessage){
  console.log('newMessage:',newMessage);
});


socket.emit('createMessage',{
  from:'client',
  to:'server',
  text:'bye'
});
