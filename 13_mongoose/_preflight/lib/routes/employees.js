const { Router } = require('express');
const Employee = require('../modles/Employee');

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
  })

  .patch('/:id', (req, res, next) => {
    const updateObj = {};
    if(req.body.name) updateObj.name = req.body.name;
    if(req.body.dob) updateObj.dob = req.body.dob;
    if(req.body.warehouse) updateObj.warehouse = req.body.warehouse;

    Employee
      .findByIdAndUpdate(req.params.id, updateObj, { new: true })
      .select({
        __v: false
      })
      .lean()
      .then(employee => res.send(employee))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Employee
      .findByIdAndDelete(req.params.id)
      .select({
        _id: true
      })
      .lean()
      .then(employee => res.send(employee))
      .catch(next);
  });
