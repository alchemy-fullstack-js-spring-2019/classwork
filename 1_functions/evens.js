const add = require('./add');

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

const firstEven = arr => arr.findIndex(isEven);

// arrow functions on one line implicitly return
const allEvens = arr => arr.every(isEven);

// declaring a function
// function allEvens(arr) {
//   return arr.every(isEven);
// }

// expressing a function
// not really used anymore
// const allEvens = function (arr) {
//   return arr.every(isEven);
// }

const addEvens = arr => {
  return add(evens(arr));
};

module.exports = {
  evens,
  firstEven,
  allEvens,
  addEvens
};
