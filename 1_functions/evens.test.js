const {
  evens
} = require('./evens');

describe('evens functions', () => {
  it('returns an array of even numbers', () => {
    expect(evens([1, 2, 3, 4, 5])).toEqual(
      [2, 4]
    );
  });
});
