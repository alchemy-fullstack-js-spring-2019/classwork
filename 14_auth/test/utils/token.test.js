require('dotenv').config();
const { tokenize } = require('../../lib/utils/token');
const jwt = require('jsonwebtoken');

describe('jwt token', () => {
  it('can create a token', () => {
    const token = tokenize({
      _id: '1234',
      email: 'test@test.com'
    });

    expect(token).toEqual(expect.any(String));
  });

  it('can verify a token', () => {
    const token = tokenize({
      name: 'spot',
      age: 12
    });

    const obj = jwt.verify(token, process.env.AUTH_SECRET);

    expect(obj.payload).toEqual({
      name: 'spot',
      age: 12
    });

  });
});
