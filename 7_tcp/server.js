const net = require('net');

net.createServer(socket => {
  socket.setDefaultEncoding('utf8');
  socket.on('data', data => {
    console.log(data.toString());
  });
}).listen(7890);
