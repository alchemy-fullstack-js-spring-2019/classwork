const power = require('./power');

describe('power function', () => {
  it('raises 4 to the power of 2', () => {
    const result = power(4, 2);
    expect(result).toEqual(16);
  });
});
