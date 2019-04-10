const fsPromises = require('fs').promises;
const copy = require('./copy');

describe('copy function', () => {

  afterEach(() => {
    return fsPromises.unlink('./copy.txt');
  });

  it('can copy a file', () => {
    return copy('./test.txt', './copy.txt')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('./test.txt', { encoding: 'utf8' }),
          fsPromises.readFile('./copy.txt', { encoding: 'utf8' })
        ]);
      })
      .then(([expected, result]) => {
        expect(expected).toEqual(result);
      });
  });
});
