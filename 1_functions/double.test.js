// import double from './double'
const double = require('./double');

describe('double function', () => {
  it('doubles the number 2', () => {
    const result = double(2);
    expect(result).toEqual(4);
  });

  it('doubles the number 5', () => {
    const result = double(5);
    expect(result).toEqual(10);
  });
});
