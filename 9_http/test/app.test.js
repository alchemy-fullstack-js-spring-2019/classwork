const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('responds to the birthday route', () => {
    return request(app)
      .get('/birthday')
      .query({ name: 'ryan' })
      .then(res => {
        expect(res.text).toEqual('Happy Birthday');
      });
  });
});
