const transformer = require('./transformer');

describe('transformer function', () => {
  it('reads a file and transforms it', () => {
    return transformer('./test.txt')
      .then(transformedData => {
        expect(transformedData).toEqual('\nIH');
      });
  });
});
