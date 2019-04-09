# Arrays and Dictionaries

## Agenda

* Big O
  * O(1)
  * O(n)
  * O(n^2)
  * O(2^n)
  * O(log n)
* Arrays
* Dictionaries

## Big O

### Constant time

Constant time `O(1)` execution algorithms always take the same amount of time to execute
regardless of the size of data.

```js
function getItem(arr, index) {
  return arr[index];
}
```

### Linear time

Linear time `O(n)` execution algorithms grow linearly with the size of input data.

```js
function map(arr, callback) {
  const mappedArr = [];
  for(let i = 0; i < arr.length; i++) {
    mappedArr[i] = callback(arr[i]);
  }

  return mappedArr;
}
```

### Square, Cube, etc... time

Square time `O(n^2)` execution algorithms grow parabolically with the size of input data

```js
function hasDuplicates(arr) {
  for(let firstPassIndex = 0; firstPassIndex < arr.length; firstPassIndex++) {
    for(let secondPassIndex = 0; secondPassIndex < arr.length; secondPassIndex++) {
      if(arr[firstPassIndex] === arr[secondPassIndex]) return true;
    }
  }

  return false;
}
```

### Exponential time

Exponential time `O(2^n)` execution algorithms grow exponentially with the size of input data

```js
function fib(n) {
  if(n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}
```

### Log time

Log time `O(log n)` execution algorithms grow logarithmically with the size of input data.
