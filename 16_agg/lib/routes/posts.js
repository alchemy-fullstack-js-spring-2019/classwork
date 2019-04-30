const { Router } = require('express');
const { ensureAuth } = require('../middleware/ensureAuth');
const Post = require('../models/Post');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    const {
      caption,
      photoUrl,
      tags
    } = req.body;

    Post
      .create({ user: req.user._id, caption, photoUrl, tags })
      .then(post => res.send(post))
      .catch(next);
  });
