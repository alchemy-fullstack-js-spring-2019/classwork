# React Forms

## Agenda

* Controlled Components
* Abstract Form Handler

## Resources

* [Forms](https://reactjs.org/docs/forms.html)

## Controlled Components

Form elements have internal state which is typically updated
based on user input. In React, we have a particular way to manage
state. Because of this we typically control form element state.
This means that the values inside of a form element (like an `input')
gets its value from our React state. These types of components are
called "Controlled Components".

```js
import React, { PureComponent } from 'react';

export default class CreateDog extends PureComponent {
  state = {
    name: '',
    age: 0,
    weight: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  handleNameChange = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleAgeChange = ({ target }) => {
    this.setState({ age: target.value });
  }

  handleWeightChange = ({ target }) => {
    this.setState({ weight: target.value });
  }

  render() {
    const {
      name,
      age,
      weight
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={name} onChange={this.handleNameChange} />
        <input name="age" value={age} onChange={this.handleAgeChange} />
        <input name="weight" value={weight} onChange={this.handleWeightChange} />
        <button>Create Dog</button>
      </form>
    )
  }
}
```

## Abstract Form Handler

All three form handlers (handleNameChange, handleAgeChange, handleWeightChange)
above have a similar structure.

```js
handleTHE_NAME_OF_THE_FIELDChange = ({ target }) => {
  this.setState({ THE_NAME_OF_THE_FIELD: target.value })
}
```

Based on this, we can make a single handler that can handle all three fields.

```js
handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value })
}
```

```js
import React, { PureComponent } from 'react';

export default class CreateDog extends PureComponent {
  state = {
    name: '',
    age: 0,
    weight: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const {
      name,
      age,
      weight
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={name} onChange={this.handleChange} />
        <input name="age" value={age} onChange={this.handleChange} />
        <input name="weight" value={weight} onChange={this.handleChange} />
        <button>Create Dog</button>
      </form>
    )
  }
}
```
