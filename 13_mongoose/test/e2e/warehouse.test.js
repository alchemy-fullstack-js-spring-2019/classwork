const { getWarehouse } = require('../data-helpers');
const request = require('supertest');
const app = require('../../lib/app');

describe('warehouse routes', () => {
  it('can create a new warehouse', () => {
    return request(app)
      .post('/api/v1/warehouses')
      .send({
        city: 'Portland',
        state: 'OR',
        zipcode: '97229'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          city: 'Portland',
          state: 'OR',
          zipcode: '97229',
          __v: 0
        });
      });
  });

  it('gets a list of warehouses', () => {
    return request(app)
      .get('/api/v1/warehouses')
      .then(res => {
        expect(res.body).toHaveLength(5);
      });
  });

  it('gets a warehouse by id', () => {
    return getWarehouse()
      .then(warehouse => {
        return Promise.all([
          Promise.resolve(warehouse),
          request(app)
            .get(`/api/v1/warehouses/${warehouse._id}`)
        ]);
      })
      .then(([warehouse, res]) => {
        expect(res.body).toEqual({
          _id: warehouse._id.toString(),
          city: warehouse.city,
          state: warehouse.state,
          zipcode: warehouse.zipcode
        });
      });
  });

  it('deletes a warehouse by id', () => {
    return getWarehouse()
      .then(warehouse => {
        return Promise.all([
          Promise.resolve(warehouse._id.toString()),
          request(app)
            .delete(`/api/v1/warehouses/${warehouse._id}`)
        ]);
      })
      .then(([_id, res]) => {
        expect(res.body).toEqual({
          _id
        });
      });
  });
});
