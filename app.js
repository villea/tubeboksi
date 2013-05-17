var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , playlist = require('./playlist');

server.listen(80);

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/', function (req, res) {
  res.setHeader("X-Frame-Options","GOFORIT");
  res.sendfile(__dirname + '/client/index.html');
});



io.sockets.on('connection', function (socket) {
  socket.emit('current', playlist.current());
  
  socket.on('add', function (item){
	  console.log('add '+item);
	  playlist.add(item);
  });
  
  setInterval(function (){
	  console.log('pop');
	  io.sockets.emit('current',playlist.current());
	  playlist.pop();
  },50000);
  
});