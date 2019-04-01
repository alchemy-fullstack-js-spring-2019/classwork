function add(arr) {
  //  [1, 2, 3];
  // 1
  // 1 + 2
  // 3 + 3
  // 6
  return arr
    .reduce((acc, n) => acc + n);
}

module.exports = add;
