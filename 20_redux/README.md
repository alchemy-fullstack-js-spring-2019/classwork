# Redux

## Agenda

* store
* actions
* reducers
* using redux
  * `getState`
  * `dispatch`
  * `subscribe`

## Dependencies

* `npm i redux`

## Resources

* [Three Principles](https://redux.js.org/introduction/three-principles)

## Store

The store is responsible for holding our applications state. You can
think of it as a global object accessible from anywhere in your application,
like `window.location`.

## Actions

Actions are plain JavaScript objects that send data/events to your store.
Actions always have a `type` key which is the name of the event.
Additionally, an action can also have a `payload`.

```js
const myAction = {
  type: 'DO_STUFF'
}
```

## Reducers

Reducers are pure functions responsible for updating our state in response
to actions. Every action we dispatch will be sent to the reducer along with
the current state. The reducer is then responsible for handling the action
and returning a new state object based on the action.

```js
function reducer(state, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}
```

**NOTE** don't forget to provide a default case in case your reducer
cannot handle a particular action.

We can also setup initial state with our reducer.

```js
const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}
```

## Using Redux

We can create a new store object by using the `createStore` function
and passing it a reducer.

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
```

### `getState`

We can get our current state with `getState`.

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState()); // { stuff: 'unfinished' }
```

### `dispatch`

We can send actions to our state with `dispatch`.

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({
  type: 'DO_STUFF'
})
console.log(store.getState()); // { stuff: 'done' }
```

### `subscribe`

We can subscribe to state changes with subscribe

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.subscribe(() => {
  // will print every time state changes
  console.log(store.getState());
});

store.dispatch({
  type: 'DO_STUFF'
})
```

`subscribe` returns an unsubscribe function we can use to
stop listening to state changes

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
  // will print every time state changes
  console.log(store.getState());
});

store.dispatch({
  type: 'DO_STUFF'
})

unsubscribe();
```
