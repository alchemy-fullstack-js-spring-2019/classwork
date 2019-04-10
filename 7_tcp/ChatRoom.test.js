describe('ChatRoom', () => {
  let chatroom = null;
  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  it('blah', () => {
    const client = {};
    const result = chatroom.add(client);
    expect(result.username).toEqual(expect.any(String));
    expect(client.username).toEqual(result.username);
  });
});
