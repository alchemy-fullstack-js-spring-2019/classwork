const {
  getWarehouse,
  getItem
} = require('../dataHelpers');
const request = require('supertest');
const app = require('../../lib/app');

describe('items routes', () => {
  it('creates a new item', () => {
    const madeOn = new Date();
    return getWarehouse()
      .then(warehouse => {
        return Promise.all([
          warehouse,
          request(app)
            .post('/api/v1/items')
            .send({
              type: 'game',
              warehouse: warehouse._id,
              madeOn
            })
        ]);
      })
      .then(([warehouse, res]) => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          type: 'game',
          warehouse: warehouse._id,
          madeOn: madeOn.toISOString(),
          __v: 0
        });
      });
  });

  it('gets a list of items', () => {
    return request(app)
      .get('/api/v1/items')
      .then(res => {
        expect(res.body).toHaveLength(1000);
      });
  });

  it('gets a item by id', () => {
    return getItem()
      .then(item => {
        return Promise.all([
          item,
          request(app)
            .get(`/api/v1/items/${item._id}`)
        ]);
      })
      .then(([item, res]) => {
        expect(res.body).toEqual({
          _id: item._id,
          type: item.type,
          warehouse: expect.any(Object),
          madeOn: item.madeOn
        });
      });
  });
});
