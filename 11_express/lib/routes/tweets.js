const { Router } = require('express');
const Tweet = require('../models/Tweet');

module.exports = Router()
  .post('/', (req, res) => {
    const {
      handle,
      body
    } = req.body;

    Tweet
      .create({ handle, body })
      .then(createdTweet => {
        res.send(createdTweet);
      });
  })

  .get('/', (req, res) => {
    Tweet
      .find()
      .then(tweets => res.send(tweets));
  })

  .get('/:id', (req, res) => {
    const { id } = req.params;
    Tweet
      .findById(id)
      .then(tweet => res.send(tweet));
  })

  .put('/:id', (req, res) => {
    const { id } = req.params;
    const {
      handle,
      body
    } = req.body;

    Tweet
      .findByIdAndUpdate(id, { handle, body })
      .then(updatedTweet => res.send(updatedTweet));
  })

  .delete('/:id', (req, res) => {
    const { id } = req.params;

    Tweet
      .findByIdAndDelete(id)
      .then(result => res.send(result));
  });
