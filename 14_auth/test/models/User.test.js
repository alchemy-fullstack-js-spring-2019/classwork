const mongoose = require('mongoose');
const User = require('../../lib/models/User');

describe('User model', () => {
  it('has an email', () => {
    const user = new User({
      email: 'test@test.com'
    });

    expect(user.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      email: 'test@test.com'
    });
  });

  it('has a _tempPassword', () => {
    const user = new User({
      email: 'test@test.com',
      password: 'password123'
    });

    expect(user._tempPassword).toEqual('password123');
  });
});
