# TDD Functions

We'll be using [jest](https://jestjs.io/) as our test runner.
Make sure to add jest as a devDependency with `npm i -D jest`.
You can run runable installed packages with `npx` (`npx jest`).

## Double

```js
double(2)
// returns 4
```

* Write tests for a `double` function
* Create a `double.js`
* Create `double.test.js`
* Write tests for a `double` function in `double.test.js`
* Write a `double` function in `double.js`

## Create a test script

**NOTE**: scripts do not need to use `npx` to run modules

* Create a `test` script inside your `package.json` file
  * this script should use jest
  * take a look at some [options](https://jestjs.io/docs/en/cli#options)
    that you may include
* BONUS: create a `test:watch` script inside your `package.json`
  * use the [watch option](https://jestjs.io/docs/en/cli#watch)
    to automatically run tests when files change

## Power

```js
power(4, 2);
// 16
```

* Create a `power.js`
* Create `power.test.js`
* Write tests for a `power` function in `power.test.js`
* Write a `power` function in `power.js`

## Double an array

* Update your `double.js` file
* Create a `doubleArray` function
  * use your `double` function to double each item in an array

## Add an array

* Create an `add.js` and `add.test.js` file
* create an `add` function that takes an array
  and returns the sum of all items in the array
* HINT: use `reduce`

## only evens

* Create an `evens.js` and `evens.test.js` file
* create an `evens` function that takes an array
  and returns only the even numbers from the array
* HINT: use `filter`

## first even

* Update your `evens.js` and `evens.test.js`
* Create a `firstEven` function that takes an
  array and returns the index of the first
  even number
* HINT: use `findIndex`

## all even

* Update your `evens.js` and `evens.test.js`
* Create an `allEven` function that takes an
  array and returns `true` is all numbers
  are even or `false` if any numbers are odd
* HINT: use `every`

## Add evens

* Update your `evens.js` and `evens.test.js`
* Create an `addEvens` function that takes an
  array and returns the sum of only the even
  numbers from the array
* HINT: use a combination of your `evens` function
  and your `add` function (you can import this)
