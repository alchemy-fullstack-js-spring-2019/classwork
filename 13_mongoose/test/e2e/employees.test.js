const {
  getWarehouse,
  getEmployee
} = require('../data-helpers');
const request = require('supertest');
const app = require('../../lib/app');

describe('employee routes', () => {
  it('can create a new employee', () => {
    const dob = new Date();
    return getWarehouse()
      .then(warehouse => {
        return request(app)
          .post('/api/v1/employees')
          .send({
            name: 'Shippy',
            dob,
            warehouse: warehouse._id
          });
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Shippy',
          dob: dob.toISOString(),
          warehouse: expect.any(String),
          __v: 0
        });
      });
  });

  it('get a list of employees', () => {
    return request(app)
      .get('/api/v1/employees')
      .then(res => {
        expect(res.body).toHaveLength(100);
      });
  });

  it('gets an employee by id', () => {
    return getEmployee()
      .then(employee => {
        return Promise.all([
          Promise.resolve(employee),
          request(app)
            .get(`/api/v1/employees/${employee._id}`)
        ]);
      })
      .then(([employee, res]) => {
        expect(res.body).toEqual({
          _id: employee._id,
          name: employee.name,
          dob: employee.dob,
          warehouse: {
            _id: expect.any(String),
            city: expect.any(String),
            state: expect.any(String),
            zipcode: expect.any(String)
          }
        });
      });
  });
});
