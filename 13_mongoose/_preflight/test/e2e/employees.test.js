const {
  getWarehouse,
  getEmployee
} = require('../dataHelpers');
const request = require('supertest');
const app = require('../../lib/app');

describe('employees routes', () => {
  it('creates a new warehouse', () => {
    return getWarehouse()
      .then(warehouse => {
        return request(app)
          .post('/api/v1/employees')
          .send({
            name: 'Shippy',
            dob: new Date(),
            warehouse: warehouse._id
          });
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Shippy',
          dob: expect.any(String),
          warehouse: expect.any(String),
          __v: 0
        });
      });
  });

  it('gets a list of employees', () => {
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
          employee,
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

  it('updates an employee name by id', () => {
    return getEmployee()
      .then(employee => {
        return Promise.all([
          employee,
          request(app)
            .patch(`/api/v1/employees/${employee._id}`)
            .send({
              name: 'Shippy'
            })
        ]);
      })
      .then(([employee, res]) => {
        expect(res.body).toEqual({
          _id: employee._id,
          name: 'Shippy',
          dob: employee.dob,
          warehouse: employee.warehouse
        });
      });
  });

  it('updates an employee dob by id', () => {
    const date = new Date();
    return getEmployee()
      .then(employee => {
        return Promise.all([
          employee,
          request(app)
            .patch(`/api/v1/employees/${employee._id}`)
            .send({
              dob: date
            })
        ]);
      })
      .then(([employee, res]) => {
        expect(res.body).toEqual({
          _id: employee._id,
          name: employee.name,
          dob: date.toISOString(),
          warehouse: employee.warehouse
        });
      });
  });

  it('updates an employee warehouse by id', () => {
    return Promise.all([getEmployee(), getWarehouse()])
      .then(([employee, warehouse]) => {
        return Promise.all([
          employee,
          warehouse,
          request(app)
            .patch(`/api/v1/employees/${employee._id}`)
            .send({
              warehouse
            })
        ]);
      })
      .then(([employee, warehouse, res]) => {
        expect(res.body).toEqual({
          _id: employee._id,
          name: employee.name,
          dob: employee.dob,
          warehouse: warehouse._id.toString()
        });
      });
  });

  it('deletes an employee by id', () => {
    return getEmployee()
      .then(employee => {
        return Promise.all([
          employee._id,
          request(app)
            .delete(`/api/v1/employees/${employee._id}`)
        ]);
      })
      .then(([_id, res]) => {
        expect(res.body).toEqual({
          _id
        });
      });
  });
});
