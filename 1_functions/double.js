// function double(n) {
//   return n * 2;
// }

const double = n => n * 2;

function doubleArray(arr) {
  // [3, 6, 9]
  // [6, 12, 18]
  // return arr.map(n => n * 2);
  return arr.map(double);
}

// export const doubleArray = () => {}
// export default double;
module.exports = {
  double,
  doubleArray
};
