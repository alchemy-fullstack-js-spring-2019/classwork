# Async Redux

## Agenda

* thunk
* promise

## Dependencies

* `npm i redux-thunk`
* `npm i promise-middleware-redux`

## Thunk middleware

By default redux can only handle plain JavaScript objects. Because of
this all state transformations are synchronous. One approach to handling
asynchronous state transformation is to create redux middleware that can
handle function actions instead of object actions. With the `redux-thunk`
middleware, we can then dispatch functions. These functions are responsible
for dispatching further actions as asynchronous operations finish.

```js
export const myActionCreator = () => dispatch => {
  return someService()
    .then(results => {
      dispatch({
        type: 'MY_ACTION',
        payload: results
      });
    });
};
```

```js
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

export default createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
```

## Promise middleware

Another approach is to create redux middleware that can handle an action
where the payload is a promise. The middleware will then dispatch a new
action after the payload promise resolves.

```js
export const myActionCreator => () => ({
  type: 'MY_ACTION',
  payload: someService()
});
```

```js
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './reducers';
import { promiseMiddleware } from 'promise-middleware-redux';

export default createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
```
