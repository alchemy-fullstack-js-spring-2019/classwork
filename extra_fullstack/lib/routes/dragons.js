const { Router } = require('express');
const Dragon = require('../models/Dragon');


module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      name,
      type,
      wings,
      image
    } = req.body;

    Dragon
      .create({ name, type, wings, image })
      .then(dragon => res.send(dragon))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Dragon
      .find()
      .lean()
      .then(dragons => res.send(dragons))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Dragon
      .findById(req.params.id)
      .lean()
      .then(dragon => res.send(dragon))
      .catch(next);
  });
