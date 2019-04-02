function numberManipulator(n, callback) {
  return callback(n);
}

function repeater(n, callback) {
  // for(let i = 0; i < n; i++) {
  //   callback();
  // }

  // let i = 0;
  // while(i < n) {
  //   callback();
  //   i++;
  // }


  [...Array(n)]
    .forEach(callback);
}



module.exports = {
  numberManipulator,
  repeater
};
