const isEven = n => n % 2 === 0;

// [1, 2, 3];
// 1 / 2 | 0 r 1
// 2 / 2 | 1 r 0
// 3 / 2 | 1 r 1
// 4 / 2 | 2 r 0
// 5 / 2 | 2 r 1
// [2, 4]
// return arr.filter(n => n % 2 === 0);
const evens = arr => arr.filter(isEven);

module.exports = {
  evens
};
