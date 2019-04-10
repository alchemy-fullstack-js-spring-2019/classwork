const uuid = require('uuid/v4');

module.exports = class ChatRoom {
  constructor() {
    this.clients = new Map();
  }

  add(client) {
    const username = uuid();
    client.username = username;
    this.clients.set(username, client);

    return client;
  }

  getClient(username) {
    return this.clients.get(username);
  }

  rename(oldUsername, newUsername) {
    if(this.clients.has(newUsername)) return null;

    const client = this.getClient(oldUsername);
    client.username = newUsername;
    this.clients.set(newUsername, client);

    this.clients.delete(oldUsername);

    return client;
  }

  all() {
    return [...this.clients.values()];
  }

};
