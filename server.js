const express = require("express");
const app = express();
const server = app.listen(3000);

app.use(express.static("public"));

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('a new user connected!' + socket.id);

  socket.on('mouseClick', mouseMessage);

  function mouseMessage(data) {
    socket.broadcast.emit('mouseClick', data);
    console.log(data);
  }

  socket.on('mouseDrag', mouseMessage2);

  function mouseMessage2(data2) {
    socket.broadcast.emit('mouseDrag', data2);
    console.log(data2);
  }

}














/////////////////////////////////////////////////
//sorry for the mess, I was trying something and it did not work...
/////////////////////////////////////////////////

//const server = require("http").Server(app);

// //if server is running and show the address
// var host = server.address().address;
// var port = server.address().port;
// console.log(host + port);

// app.use(express.static("public"));

// const socket = require('socket.io');
// const io = socket(server);


// io.sockets.on("connection", newConnection);

// function newConnection(socket) {
//   console.log('a new user connected!' + socket.id);
//   //socket.emit("connected", { msg: "You're connected!" });
  
//   //if there is a data called mouse, trigge the gotMessage function
//   socket.on("mouse", 
//     function (data) {
//     console.log(data);

//     //sending out the data
//     socket.broadcast.emit("mouse", data);

//     // var hand = new Hand(socket.id, data.x, data.y, data.r);
//     // hands.push(hand);

//     //similar to the code above but!
//     //this means the client that sent the message also gets the data that they have sent
//     //io.sockets.emit('mouse', data);
//   }
//   );


// server.listen(process.env.PORT || 3000, function() {
//   console.log("Started server");
// });