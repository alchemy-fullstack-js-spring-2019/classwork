# Higher-order functions

All of these higher-order functions are functions
that take functions as arguments. When writing
such higher-order functions it can be useful
to use a mock function to pass the higher-order
function. Take a look at jest's
[mock functions](https://jestjs.io/docs/en/mock-functions)

```js
document.getElementById('myId').addEventListener('click', () => {

});
```

## Number manipulator

`numberManipulator` is a function that manipulates
a number by invoking another function. For example,
we can double a number with it:

```js
numberManipulator(5, n => n * 2);
// 10
```

OR

```js
const double = n => n * 2;
numberManipulator(5, double);
```

* Create a function `numberManipulator` that takes
  a number `n` and a function `callback`
* Invoke the `callback` and pass it `n` as an argument
* **Don't** forget to write tests first

## Repeater

`repeater` is a function that can call another function
multiple times. For example, to print "hi" five times
we could:

```js
repeater(5, () => console.log('hi'))
```

* Create a function `repeater` that takes a
  number `n` and a function `callback`
* Invoke the `callback` `n` times
* **Don't** forget to write tests first

## map

`map` is a function that calls another function for
each item in an array. It then returns the results
as another array. For example, to double each item
in an array we would:

```js
map([1, 2, 3], n => n * 2);
// results in [2, 4, 6]
```

* Create a `map` function that takes an array
  `arr` and a function `callback`
* Invoke the `callback` for each value in `arr`
  storing the results in a new array
* return the new array
* **Don't** forget to write tests first
