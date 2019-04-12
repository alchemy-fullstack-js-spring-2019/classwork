const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/service/rickAndMortyApi.js');

describe('app routes', () => {
  it('creates a person with /people', () => {
    return request(app)
      .post('/people')
      .send({ name: 'ryan', age: 32, color: 'red' })
      .then(res => {
        expect(res.body).toEqual({
          name: 'ryan',
          age: 32,
          color: 'red',
          _id: expect.any(String)
        });
      });
  });

});
