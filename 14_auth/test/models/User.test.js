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
});
