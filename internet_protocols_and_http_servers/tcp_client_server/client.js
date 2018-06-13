const net = require('net');

const socket = net.Socket();

socket.on('data', (data) => { 
  console.log(`data received on client ${data}`);
  process.exit();
});

socket.connect(5000, '127.0.0.1', () => {
  socket.write('Hello Server!') ;
});