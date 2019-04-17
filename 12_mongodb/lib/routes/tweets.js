const { Router } = require('express');
const Tweet = require('../models/Tweet');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      // users ID
      user,
      body
    } = req.body;

    Tweet
      .create({ user, body })
      .then(createdTweet => res.send(createdTweet))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Tweet
      .find()
      .select({
        __v: false
      })
      .then(tweets => res.send(tweets))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Tweet
      .findById(req.params.id)
      .populate('user', {
        __v: false
      })
      .select({
        __v: false
      })
      .lean()
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    const { body } = req.body;
    Tweet
      .findByIdAndUpdate(req.params.id, { body }, { new: true })
      .populate('user', {
        __v: false,
        image: false
      })
      .select({
        __v: false
      })
      .lean()
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Tweet
      .findByIdAndDelete(req.params.id)
      .select({
        _id: true
      })
      .then(deletedTweet => res.send(deletedTweet))
      .catch(next);
  });
