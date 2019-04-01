# Callbacks

Callbacks are functions that are invoked after some
asynchronous task or event happens. For example:

```js
const button = document.getElementById('button');
button.addEventListener('click', () => {
  console.log('This is inside a callback function');
});
```

```js
const button = document.getElementById('button');
const callback = () => {
  console.log('This is inside a callback function');
}
button.addEventListener('click', callback);
```

Under the hood, `addEventListener` is waiting for click
events. Upon receiving a click event, it will invoke your
callback.

Let's start making our own functions that work asynchronously.
To do this, our functions will need to take a callback and
invoke that callback.

## setTimeout

* use `setTimeout` to fire a callback in 2 seconds
* after two seconds print "OHHHH, callbacks?"
* How would you make this happen after 1 second?
* How would you make this happen every 1 second continually?

## Wait a bit

`wait` is a function that take a number of milliseconds
to wait before invoking a callback.

```js
wait(1000, () => console.log('after 1 second'));
```

Note, jest needs to know when your async tests are done.
To do this, jest will pass you a `done` function. Invoke
this function after your tests complete. HINT: your test
is done after your callback is invoked.

```js
it('waits a bit then invokes callback', done => {
  // call done when your test is done
})
```

* create `wait.js` and `wait.test.js` files
* create a `wait` function that takes milliseconds to wait
  and a callback to invoke after.
* use `setTimeout` to invoke callback
