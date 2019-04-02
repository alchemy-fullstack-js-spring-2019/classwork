const {
  evens,
  firstEven,
  allEvens,
  addEvens
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

  describe('allEvens', () => {
    it('returns truce if all number are even', () => {
      expect(allEvens([2, 4, 6])).toBeTruthy();
    });

    it('returns truce if all number are even', () => {
      expect(allEvens([3, 5, 8])).toBeFalsy();
    });
  });

  describe('addEvens', () => {
    it('returns all even numbers added together', () => {
      expect(addEvens([1, 2, 3, 4, 5])).toEqual(6);
    });
  });
});
