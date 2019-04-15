const { Router } = require('express');
const Tweet = require('../models/Tweet');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      handle,
      body
    } = req.body;

    Tweet
      .create({ handle, body })
      .then(createdTweet => {
        res.send(createdTweet);
      })
      .catch(err => {
        next(err);
      });
  })

  .get('/', (req, res, next) => {
    Tweet
      .find()
      .then(tweets => res.send(tweets))
      .catch(err => {
        next(err);
      });
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    Tweet
      .findById(id)
      .then(tweet => res.send(tweet))
      .catch(err => {
        next(err);
      });
  })

  .put('/:id', (req, res, next) => {
    const { id } = req.params;
    const {
      handle,
      body
    } = req.body;

    Tweet
      .findByIdAndUpdate(id, { handle, body })
      .then(updatedTweet => res.send(updatedTweet))
      .catch(err => {
        next(err);
      });
  })

  .delete('/:id', (req, res, next) => {
    const { id } = req.params;

    Tweet
      .findByIdAndDelete(id)
      .then(result => res.send(result))
      .catch(err => {
        next(err);
      });
  });
