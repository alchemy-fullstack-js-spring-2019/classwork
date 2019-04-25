const User = require('../models/User');

module.exports = (req, res, next) => {
  return User
    .findByToken(req.cookies.session)
    .then(user => {
      if(!user) {
        const error = new Error('Invalid token');
        error.status = 400;
        return next(error);
      }

      req.user = user;
      next();
    });
};
