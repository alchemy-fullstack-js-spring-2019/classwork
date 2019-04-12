const request = require('supertest');
const app = require('../lib/app');
const People = require('../lib/models/People');

jest.mock('../lib/service/rickAndMortyApi.js');

// Create
// Read
// Update
// Delete

describe('app routes', () => {
  afterEach(() => {
    return People.drop();
  });

  it('creates a person with the /people route', () => {
    return request(app)
      .post('/people')
      .send({ name: 'test' })
      .then(res => {
        expect(res.body).toEqual({
          name: 'test',
          _id: expect.any(String)
        });
      });
  });

  it('gets a list of people with the /people route', () => {
    return People.create({
      name: 'tester'
    })
      .then(() => {
        return request(app)
          .get('/people');
      })
      .then(res => {
        expect(res.body).toHaveLength(1);
        expect(res.body).toContainEqual({
          name: 'tester',
          _id: expect.any(String)
        });
      });
  });

  it('gets a person by id', () => {
    return People.create({ name: 'tester' })
      .then(person => {
        return request(app)
          .get(`/people/${person._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'tester',
          _id: expect.any(String)
        });
      });
  });

  it('updates a person by id', () => {
    return People.create({ name: 'testter' })
      .then(person => {
        return request(app)
          .put(`/people/${person._id}`)
          .send({ name: 'tester' });
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'tester',
          _id: expect.any(String)
        });
      });
  });

  it('deletes a person by id', () => {
    return People.create({ name: 'tester' })
      .then(person => {
        return request(app)
          .delete(`/people/${person._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          deleted: 1
        });
      });
  });

});
