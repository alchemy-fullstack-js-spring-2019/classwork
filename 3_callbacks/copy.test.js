const copy = require('./copy');

describe('copy function', () => {
  it('can copy a file', done => {
    copy('./1_callbacks.md', './1_callbacks-copy.md', err => {
      // expect error to not happen
      // read the copied file and the original
      // -> test that copied file and original are the same
      // done()
    });
  });
});
