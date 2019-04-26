const { Router } = require('express');
const ensureAuth = require('../middleware/ensureAuth');
const Post = require('../models/Post');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    const {
      photoUrl,
      caption,
      tags
    } = req.body;

    Post
      .create({
        user: req.user._id,
        photoUrl,
        caption,
        tags
      })
      .then(post => res.send(post));
  });
