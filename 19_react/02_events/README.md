# React Events

## Agenda

* Class Components
* Event Handlers
* `bind`

## Resources

* [Handling Events](https://reactjs.org/docs/handling-events.html)

## Class Components

In addition to functional components, we can also define
components as a class. By defining a component as a class
we have a few added capabilities.

```js
import React, { PureComponent } from 'react';

export default class Dog extends PureComponent {
  render() {
    return (
      <dl>
        <dt>Name</dt>
        <dd>{this.props.name}</dd>

        <dt>Age</dt>
        <dd>{this.props.age}</dd>

        <dt>Weight</dt>
        <dd>{this.props.weight}</dd>
      </dl>
    );
  }
}
```

A class component's properties are accessible with `this.props`.

Class components are often called stateful components, smart components,
or conatianers. Functional components are often called stateless components,
dumb components, or presentational components.

### Prop Types

Like functional components it is nice to provide PropTypes to our class
components

```js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Dog extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    weight: PropTypes.string.isRequired
  }

  render() {
    return (
      <dl>
        <dt>Name</dt>
        <dd>{this.props.name}</dd>

        <dt>Age</dt>
        <dd>{this.props.age}</dd>

        <dt>Weight</dt>
        <dd>{this.props.weight}</dd>
      </dl>
    );
  }
}
```

## Event Handlers

Often on a webpage we want to be able to respond to events. In vanilla
JavaScript we can add event handlers to elements:

```js
document
  .getElementById('button')
  .addEventListener('click', event => {
    console.log('clicked');
  });
```

### Class Component Event Handlers

```js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  clickHandler = event => {
    console.log('clicked');
  }

  render() {
    return (
      <button onClick={this.clickHandler}>{this.props.title}</title>
    );
  }
}
```

### Functional Component Event Handlers

```js
import React from 'react';
import PropTypes from 'prop-types';

function Button({ title}) {
  const clickHandler = event => console.log('clicked');

  return (
    <button onClick={clickHandler}>{title}</title>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;
```

## `bind`

`bind` allows us to partially apply a function.

```js
import React from 'react';
import PropTypes from 'prop-types';

function Button({ title}) {
  const clickHandler = (text, event) => console.log(text);

  return (
    <button onClick={clickHandler.bind(null, 'my text')}>{title}</title>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;
```

Is the same as

```js
import React from 'react';
import PropTypes from 'prop-types';

function Button({ title}) {
  const clickHandler = (text, event) => console.log(text);

  return (
    <button onClick={event =>  clickHandler('my text', event)}>{title}</title>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;
```
