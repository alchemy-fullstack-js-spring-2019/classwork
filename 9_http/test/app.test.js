const request = require('supertest');
const app = require('../lib/app');
const People = require('../lib/models/People');

jest.mock('../lib/service/rickAndMortyApi.js');

describe('app routes', () => {
  afterAll(() => {
    return People.drop();
  });

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

  it('gets a list of all people with /people', () => {
    return request(app)
      .get('/people')
      .then(res => {
        expect(res.body).toHaveLength(1);
      });
  });

  it('gets a person by id', () => {
    People.create({ name: 'tester', age: 100, color: 'blue' })
      .then(createdPerson => {
        return request(app)
          .get(`/people/${createdPerson._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'tester',
          age: 100,
          color: 'blue',
          _id: expect.any(String)
        });
      });
  });

});
