const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tweets', {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true
});

const tweetSchema = new mongoose.Schema({
  handle: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  tags: [String]
});

const Tweet = mongoose.model('Tweet', tweetSchema);

Tweet
  .create([
    { handle: 'ryan', text: 'hi there', tags: ['hot', 'fast'] },
    { handle: 'ryan', text: 'hi there', tags: ['good', 'hot'] },
    { handle: 'ryan', text: 'hi there', tags: ['bad', 'good'] },
    { handle: 'ryan', text: 'hi there', tags: ['hot', 'ready'] },
    { handle: 'ryan', text: 'hi there', tags: ['icecold', 'redhot'] },
    { handle: 'ryan', text: 'hi there', tags: ['hot', 'no'] },
  ])
  .finally(() => mongoose.connection.close());
