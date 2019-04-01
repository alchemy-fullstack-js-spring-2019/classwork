// higher order function
// takes a function as an argument
function executor(fn) {
  fn();
}

// it returns a function
function addN(n) {
  return function(x) {
    return n + x;
  };
}

add(1)(2);
