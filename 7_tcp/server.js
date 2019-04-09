const net = require('net');

const allClients = [];
// every client is a socket
const server = net.createServer(connectedClient => {
  console.log('client connected!!');
  allClients.push(connectedClient);

  // client.pipe(client);
  connectedClient.on('data', data => {

    allClients.forEach(client => {
      client.write(`ECHO FROM SERVER: ${data}`);
    });
  });
});
