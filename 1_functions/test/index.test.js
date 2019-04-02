const {
  filter
} = require('../lib/index');

describe('array methods', () => {
  describe('filter', () => {
    it('can filter out odd numbers', () => {
      const evens = filter(
        [1, 2, 3, 4, 5],
        n => n % 2 === 0
      );
      expect(evens).toEqual([2, 4]);
    });
  });
});
