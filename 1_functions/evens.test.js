const {
  evens,
  firstEven
} = require('./evens');

describe('evens functions', () => {
  it('returns an array of even numbers', () => {
    expect(evens([1, 2, 3, 4, 5])).toEqual(
      [2, 4]
    );
  });

  it('returns the index of the first even number in an array', () => {
    expect(firstEven([1, 2, 3])).toEqual(1);
  });
});
