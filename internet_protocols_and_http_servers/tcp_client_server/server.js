const net = require('net');

const server = net.createServer( (socket) => {
  socket.on('data', (data) => {
    console.log(`Data received on server: ${data}`);
    socket.write('Thank you for sending data over');
  });
});

server.listen(5000, '127.0.0.1');
console.log('Server is running on 127.0.0.1 on port 5000');