const wait = require('./wait');

describe('wait function', () => {
  it('waits some time and invokes a callback', done => {
    wait(1000, done);
  });
});
