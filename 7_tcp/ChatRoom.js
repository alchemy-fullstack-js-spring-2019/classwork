class ChatRoom {
  constructor() {
    this.clients = new Map();
  }

  add(client) {
    this.clients.set('some username', client);
  }

  getClient(username) {
    // this.clients.get()
  }

  all() {
    // all clients in this.clients
  }


}
