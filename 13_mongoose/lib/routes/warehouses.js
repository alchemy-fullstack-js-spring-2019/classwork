const { Router } = require('express');
const Warehouse = require('../models/Warehouse');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      city,
      state,
      zipcode
    } = req.body;

    Warehouse
      .create({ city, state, zipcode })
      .then(warehouse => res.send(warehouse))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Warehouse
      .find()
      .select({
        __v: false
      })
      .lean()
      .then(warehouse => res.send(warehouse))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Warehouse
      .findById(req.params.id)
      .select({
        __v: false
      })
      .lean()
      .then(warehouse => res.send(warehouse))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Warehouse
      .findByIdAndDelete(req.params.id)
      .select({
        _id: true
      })
      .lean()
      .then(warehouse => res.send(warehouse))
      .catch(next);
  });
