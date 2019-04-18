const mongoose = require('mongoose');
const state = require('mongoose/lib/connectionstate');

module.exports = (req, res, next) => {
  let err = null;
  const { readyState } = mongoose.connection;
  if(readyState !== state.connected && readyState !== state.connecting) {
    err = new Error('Not connected to MongoDB');
    err.status = 500;
  }

  next(err);
};
