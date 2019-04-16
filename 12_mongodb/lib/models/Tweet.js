const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  handle: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true,
    maxlength: 256
  }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
