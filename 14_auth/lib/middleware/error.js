// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({
      error: err.message || err
    });
};
