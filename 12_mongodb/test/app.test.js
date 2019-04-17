const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');
const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');

describe('tweet routes', () => {
  const createTweet = () => {
    return User.create({ handle: 'ryan', image: '' })
      .then(user => {
        return Tweet.create({ user: user._id, body: 'my tweet' });
      });
  };


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
          user: expect.any(String),
          body: 'my first tweet',
          _id: expect.any(String),
          __v: 0
        });
      });
  });

  it('can get a list of tweets', () => {
    return createTweet()
      .then(() => {
        return request(app)
          .get('/tweets');
      })
      .then(res => {
        expect(res.body).toHaveLength(1);
      });
  });

  it('can get a tweet by id', () => {
    return createTweet()
      .then(createdTweet => {
        return request(app)
          .get(`/tweets/${createdTweet._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          user: {
            handle: 'ryan',
            image: '',
            _id: expect.any(String)
          },
          _id: expect.any(String),
          body: 'my tweet'
        });
      });
  });

  it('can patch a tweet', () => {
    return createTweet()
      .then(createdTweet => {
        return request(app)
          .patch(`/tweets/${createdTweet._id}`)
          .send({ body: 'hi there' });
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          user: {
            _id: expect.any(String),
            handle: 'ryan'
          },
          body: 'hi there'
        });
      });
  });

  it('can delete a tweet', () => {
    return createTweet()
      .then(tweet => {
        // return request(app)
        //   .delete(`/tweets/${tweet._id}`);
        return Promise.all([
          Promise.resolve(tweet._id.toString()),
          request(app)
            .delete(`/tweets/${tweet._id}`)
        ]);
      })
      .then(([_id, res]) => {
        expect(res.body).toEqual({
          _id
        });
      });
  });
});
