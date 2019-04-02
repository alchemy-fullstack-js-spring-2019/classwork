function filter(arr, callback) {
  // const filteredArr = [];
  // for(let i = 0; i < arr.length; i++) {
  //   if(arr.hasOwnProperty(i) && callback(arr[i])) {
  //     filteredArr[filteredArr.length] = arr[i];
  //   }
  // }

  // return filteredArr;

  return reduce(arr, (acc, value) => {
    if(callback(value)) {
      // acc - [1, 2, 3, 4]
      // [..acc, 5] | [1, 2, 3, 4, 5]
      acc[acc.length] = value;
    }
  }, []);
}

function reduce(arr, callback, initialValue) {
  let acc = initialValue;
  let index = 0;
  if(!acc) {
    acc = arr[0];
    index = 1;
    // for(index; index < arr.length; index++) {
    //   if(arr.hasOwnProperty(i)) {
    //     acc = arr[index];
    //     break;
    //   }
    // }
  }

  for(index; index < arr.length; index++) {
    acc = callback(acc, arr[index]);
  }

  return acc;
}

module.exports = {
  filter,
  reduce
};
