var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
app.get('/', function(req, res){
  res.render('front');
});


app.get('/chatwindow', function(req, res){
  res.render('chatwindow');
});

io.on('connection', function(socket){
  console.log('a user connected');
  // var data = {};
  // data["hello"] = 5;
  
  socket.on('fromfront',function(data){
  	io.emit('message',data);
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('redirect',function(data){
    console.log("i am in redirect");
    res.redirect('/chatwindow');
  });
  
  socket.on('disconnect', function() {
      console.log('Got disconnect!');
  });


});

http.listen(3030,"0.0.0.0",function(){
  console.log('listening on *:3030');
});


