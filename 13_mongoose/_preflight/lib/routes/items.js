const { Router } = require('express');
const Item = require('../modles/Item');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      type,
      warehouse,
      madeOn
    } = req.body;

    Item
      .create({ type, warehouse, madeOn })
      .then(item => res.send(item))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Item
      .find()
      .select({
        __v: false
      })
      .lean()
      .then(items => res.send(items))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Item
      .findById(req.params.id)
      .populate('warehouse', {
        __v: false
      })
      .select({
        __v: false
      })
      .then(item => res.send(item))
      .catch(next);
  });
