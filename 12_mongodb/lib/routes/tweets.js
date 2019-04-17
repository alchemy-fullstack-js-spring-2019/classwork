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
  });
