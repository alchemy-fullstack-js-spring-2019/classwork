function double(n) {
  return n * 2;
}

function doubleArray(arr) {
  return arr.map(double);
}

// export const doubleArray = () => {}
// export default double;
module.exports = {
  double,
  doubleArray
};
