# React children

## Agenda

* children property
* Error Boundaries

## Resources

* [Composition vs Inheritence](https://reactjs.org/docs/composition-vs-inheritance.html)
* [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)

## Children Property

A component, like vanilla HTML, can have children.

```html
<div id="parent">
  <p class="child"></p>
  <p class="child"></p>
  <p class="child"></p>
</div>
```

```js
<Parent>
  <p>Every</p>
  <p>Thing</p>
  <p>Is</p>
  <p>Fine</p>
</Parent>
```

These children are passed to a component via the `children` prop.
(NOTE: children is a `PropTypes.node`).

```js
import React from 'react';
import PropTypes from 'prop-types';

function Parent({ children }) {
  return (
    <>
      {children}
    </>
  );
}

Parent.propTypes = {
  children: PropTypes.node
};

export default Parent;
```

## Error Boundaries

Error boundaries are components that act like a `catch`. When an
error occurs the error boundary can catch the error and present an
error message. If there is no error an error boundary will render
it's children.

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  state = {
    error: false
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error) {
    console.error(error)
  }

  render() {
    if(this.state.error) {
      return <h3>Error!</h3>
    }

    return this.props.children
  }
}
```

Error boundaries include at least one of:

Method | Use
------ | --
`static getDerivedStateFromError(error)` | Used to update state
`componentDidCatch` | Used to log messages
