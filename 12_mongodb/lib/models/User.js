const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  handle: {
    type: String,
    required: true
  },
  image: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
