const { getAgent } = require('./data-helpers');

describe('auth routes', () => {
  it('can verify login', () => {
    return getAgent()
      .get('/api/v1/auth/verify')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          email: 'hacker@test.com'
        });
      });
  });
});
