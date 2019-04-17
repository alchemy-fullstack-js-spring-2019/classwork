const mongoose = require('mongoose');
const Tweet = require('../../lib/models/Tweet');

describe('Tweet model', () => {
  it('has a user and body field', () => {
    const id = new mongoose.Types.ObjectId();
    const tweet = new Tweet({
      user: id,
      body: 'my first tweet'
    });

    expect(tweet.toJSON()).toEqual({
      user: id,
      body: 'my first tweet',
      _id: expect.any(mongoose.Types.ObjectId)
    });
  });

  it('has a required user field', () => {
    const tweet = new Tweet({
      body: 'my first tweet'
    });

    const errors = tweet.validateSync().errors;

    expect(errors.user.message).toEqual('Path `user` is required.');
  });

  it('has a required body field', () => {
    const tweet = new Tweet({
      handle: 'ryan'
    });

    const errors = tweet.validateSync().errors;

    expect(errors.body.message).toEqual('Path `body` is required.');
  });

  it('has a body with maxlength 256', () => {
    const body = 'a'.repeat(300);
    const tweet = new Tweet({
      handle: 'ryan',
      body
    });

    const errors = tweet.validateSync().errors;

    expect(errors.body.message).toEqual(`Path \`body\` (\`${body}\`) is longer than the maximum allowed length (256).`);
  });

});
