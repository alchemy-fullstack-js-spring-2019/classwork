const { Router } = require('express');
const Employee = require('../models/Employee');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      name,
      dob,
      warehouse
    } = req.body;

    Employee
      .create({ name, dob, warehouse })
      .then(employee => res.send(employee))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Employee
      .find()
      .select({
        __v: false
      })
      .lean()
      .then(employees => res.send(employees))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Employee
      .findById(req.params.id)
      .populate('warehouse', {
        __v: false
      })
      .select({
        __v: false
      })
      .lean()
      .then(employee => res.send(employee))
      .catch(next);
  });
