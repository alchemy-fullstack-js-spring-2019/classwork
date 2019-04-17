const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');
const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');

describe('tweet routes', () => {
  beforeAll(() => {
    return mongoose.connect('mongodb://localhost:27017/tweets', {
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true
    });
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a new tweet', () => {
    return User.create({ handle: 'ryan', image: '' })
      .then(user => {
        return request(app)
          .post('/tweets')
          .send({ user: user._id, body: 'my first tweet' });
      })
      .then(res => {
        expect(res.body).toEqual({
          handle: 'ryan',
          body: 'my first tweet',
          _id: expect.any(String),
          __v: 0
        });
      });
  });

  it('can get a list of tweets', () => {
    User.create({ handle: 'ryan', image: '' })
      .then(user => {
        return Tweet.create({ user: user._id, body: 'my tweet' });
      })
      .then(() => {
        return request(app)
          .get('/tweets');
      })
      .then(res => {
        expect(res.body).toHaveLength(1);
      });
  });
});
