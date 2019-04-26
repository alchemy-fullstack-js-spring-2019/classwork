const { Router } = require('express');
const ensureAuth = require('../middleware/ensureAuth');
const User = require('../models/User');

module.exports = Router()
  .post('/signup', (req, res, next) => {
    const {
      email,
      password
    } = req.body;


    User
      .signup(email, password)
      .then(({ user, token }) => {
        res.cookie('session', token);
        res.send(user);
      })
      .catch(next);
  })

  .post('/signin', (req, res, next) => {
    const {
      email,
      password
    } = req.body;

    User.signin(email, password)
      .then(result => {
        if(!result) {
          const error = 'Invalid login';
          error.status = 401;
          return next(error);
        }
        const { user, token } = result;

        res.cookie('session', token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        });

        res.send(user);
      });
  })

  .get('/verify', ensureAuth, (req, res) => {
    res.send(req.user);
  });
