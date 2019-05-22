# React Redux

## Agenda

* setting up the store
* using Provider
* connect
  * mapStateToProps
  * mapDispatchToProps

## Dependencies

* `npm i react-redux`

## Resources

* [React Redux](https://redux.js.org/basics/usage-with-react)

## Setting up the store

In order to start using redux with react we need to setup a store.

```js
import { createStore } from 'redux';
import reducer from './reducers';

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

## Using Provider

In order for our store to get passed to all components, without explicitly
passing it as a property we can setup a provider.

```js
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## connect

`react-redux` provides a `connect` higher-order component that allows
us to connect a component to the redux store. All connected components
are containers.

The `connect` function takes two arguments `mapStateToProps` and
`mapDispatchToProps` and returns a function that takes a component
that you want to connect to the store.

```js
import { connect } from 'react-redux';
import MyComponent from '../../components/MyComponent';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);

```

Both `mapStateToProps` and `mapDispatchToProps` are functions that return
objects. Each key of the returned object will be passed to the connected
component as a property.

### mapStateToProps

`mapStateToProps` is a function that takes state. State comes from the store
via `store.getState()`. By using selectors you can get or derive information
from state and map that information onto properties that your component expects.

```js
import { connect } from 'react-redux';
import { getPosts } from '../../selectors/postSelectors';
import Posts from '../../components/posts/Posts';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

export default connect(
  mapStateToProps
)(Posts);
```

### mapDispatchToProps

`mapDispatchToProps` is a function that takes dispatch. Dispatch is the
`store.dispatch` function. `mapDispatchToProps` is used to pass functions,
as properties, to your component. These functions can dispatch actions to
update your state.

```js
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
import PostForm from '../../components/posts/PostForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(title, body) {
    dispatch(createPost(title, body));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
```
