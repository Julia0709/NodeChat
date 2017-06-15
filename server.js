// console.log('hello from our node script!')

// use a node.js package 'express'
var express = require('express');
var app = express();

// http request
var http = require('http');
// combine the http server with 'app'
var server = http.Server(app);

// tell express just pick the 'client' folder
app.use(express.static('client'));


// use socket.IO
  var io = require('socket.io')(server);

  io.on('connection', function (socket) {
    // correspond with app.js
    socket.on('message', function (msg) {
      io.emit('message', msg);
    });
  });


// check requests on 8080 port
server.listen(8080, function() {
  console.log('Chat server running');
});
