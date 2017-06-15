// alert('hello from the JS file');

// start app.js when html roaded
$(document).ready(function() {

  var socket = io();

  $('form').submit(function () {
    var text = $('#message').val();
    socket.emit('message', text);
    $('#message').val('');

    // alert(text);

    return false;
  });

  socket.on('message', function (msg) {
    $('<li>').text(msg).appendTo('#history');
  });


});
