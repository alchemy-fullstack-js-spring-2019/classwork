const { Router } = require('express');
const JSONTransform = require('../utils/JSONTransform');
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
      .then(employee => res.send(employee));
  })

  .get('/stream', (req, res, next) => {
    Employee
      .find()
      .select({
        __v: false
      })
      .lean()
      .cursor()
      .pipe(new JSONTransform({ array: true }))
      .pipe(res.type('json'));
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
      .cursor()
      .pipe(new JSONTransform())
      .pipe(res.type('json'));
  });
