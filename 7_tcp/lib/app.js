const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const chatroom = new ChatRoom();
// every client is a socket
module.exports = net.createServer(connectedClient => {
  console.log('client connected!!');
  chatroom.add(connectedClient);

  // client.pipe(client);
  connectedClient.on('data', data => {
    const message = parseMessage(data.toString());
    if(!message) return connectedClient.write('Sorry I dont understand');

    // if(message.command === 'all') {

    // } else if(message.command === 'dm') {

    // } else if(message.command === 'nick') {

    // } else {

    // }
    switch(message.command) {
      case 'all':
        chatroom.all()
          .filter(client => client !== connectedClient)
          .forEach(client => client.write(`${connectedClient.username}: ${message.text}`));
        break;
      case 'dm':
        chatroom.getClient(message.args)
          .write(`@dm - ${connectedClient.username}: ${message.text}`);
        break;
      case 'nick':
        chatroom.rename(connectedClient.username, message.args);
        break;
      default:
        connectedClient.write('huh??');
    }
  });
});
