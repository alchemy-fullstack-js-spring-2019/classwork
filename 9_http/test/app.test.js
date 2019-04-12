const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/service/rickAndMortyApi.js');

describe('app routes', () => {
  it('respons with a character at /character/:id', () => {
    return request(app)
      .get('/character/3')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Ryan',
          status: 'Alive',
          species: 'Human'
        });
      });
  });

});
