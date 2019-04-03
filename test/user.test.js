const { Users } = require('../lib/user.js');

describe('create user', () => {
  let user = null;
  beforeEach(() => {
    user = new Users('sean nelson', 'yahoo', 'pword');
  });

  it('shows the username', () => {
    expect(user.name).toEqual('sean nelson');
  });
  it('shows the email', () => {
    expect(user.email).toEqual('yahoo');
  });
  it('shows the password', () => {
    expect(user.password).toEqual('pword');
  });
  it('shows toString', () => {
    expect(user.toString()).toEqual('sean nelson | yahoo');
  });
  it('changes password', () => {
    user.resetPassword('pword', 'dog');
    expect(user.password).toBe('dog');
  });

  it('throws error on password', () => {
    expect(() => {
      user.resetPassword('newAttempt', 'badTry');
    }).toThrow();
  });

});
