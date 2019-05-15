# React Lists

## Agenda

* Creating lists of things with map
* keys

## Resources

* [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

## Creating Lists

Often lists are created by mapping through an array of items.
For each item in the array we return an element that will form
the list.

```js
import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

function Dogs({ dogs }) {
  const dogLis = dogs.map(({ name, age, weight }) => (
    <li>
      <Dog name={name} age={age} weight={weight} />
    </li>
  ));

  return (
    <ul>
      {dogLis}
    </ul>
  )
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
```

## Keys

Keys are used internally by React to manage our list of items.
They let React identify which items have changed, been added,
or been removed, and prevent unnecessary re-rendering. Keys
should be a unique string in the list.

```js
import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

function Dogs({ dogs }) {
  const dogLis = dogs.map(({ name, age, weight }) => (
    <li>
      <Dog key={`${name}-${age}-${weight}`} name={name} age={age} weight={weight} />
    </li>
  ));

  return (
    <ul>
      {dogLis}
    </ul>
  )
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
```
