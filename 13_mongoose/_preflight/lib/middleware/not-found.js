// eslint-disable-next-line no-unused-vars
module.exports = (req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;

  next(error);
};
