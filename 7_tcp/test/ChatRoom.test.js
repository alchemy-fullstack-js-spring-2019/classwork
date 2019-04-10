const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {
  let chatroom = null;
  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  it('adds a new client to the chatroom', () => {
    const client = {};
    const result = chatroom.add(client);
    expect(result.username).toEqual(expect.any(String));
    expect(client.username).toEqual(result.username);
  });

  it('get a client by its username', () => {
    const client = {};
    chatroom.add(client);

    const result = chatroom.getClient(client.username);

    expect(client).toEqual(result);
  });

  it('renames a client by username', () => {
    const client = {};
    chatroom.add(client);

    chatroom.rename(client.username, 'ryan');

    const result = chatroom.getClient('ryan');

    expect(client).toEqual(result);
    expect(client.username).toEqual('ryan');
  });

  it('gets all clients in the chatroom', () => {
    const client1 = {};
    const client2 = {};
    const client3 = {};

    chatroom.add(client1);
    chatroom.add(client2);
    chatroom.add(client3);

    const results = chatroom.all();

    expect(results).toContainEqual(client1);
    expect(results).toContainEqual(client2);
    expect(results).toContainEqual(client3);

  });
});
