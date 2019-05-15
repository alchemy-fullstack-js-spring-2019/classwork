# React Higher Order Components

## Agenda

* Higher order function
  * partial application
  * closures
* Higher order components

## Higher order functions

In JavaScript functions are "first class citizens", which means
that functions can be passed around like any other value. They
can be passed to another function as an argument and returned
from a function as a result.

### Partial Application

```js
function add(a, b) {
  return a + b;
}

function partialAdd(a) {
  return function(b) {
    return add(a, b);
  };
}

const add5 = partialAdd(5);
console.log(add5(10)); // 15
```

```js
const add = (a, b) => a + b;

const partialAdd = a => b => add(a, b);

const add5 = partialAdd(5);
console.log(add5(10)); // 15
```

```js
function ColorPicker({ updateColor }) {
  const handleColor = color => event => updateColor(color)

  return <button onClick={handleColor('red')}>Red</button>;
}
```

Partial application is so useful that JavaScript gives us a built
in way to partially apply functions using `bind`.

```js
const add = (a, b) => a + b;

const add5 = add.bind(null, 5);
console.log(add5(10)); // 15
```

### Closures

```js
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
```

```js
function factorial(n) {
  if(n <= 1) return 1;

  return n * factorial(n - 1);
}

function cachedFactorial() {
  const cache = {};

  return function(n) {
    if(cache[n]) {
      return cache[n];
    }

    const result = factorial(n);
    cache[n] = result;

    return result;
  }
}

const cFactorial = cachedFactorial();
cFactorial(5); // this will call factorial(5)
cFactorial(5); // this will NOT call factorial(5)
```

### Higher order components

Higher order components (HOCs) are functions that take components
and return components. HOCs allow us to reuse functionality with
multiple components.

```js
import React from 'react;

export const withTitle = Component => title => {
  return function WithTitle(props) {
    return <Component title={title} ...props />
  }
}
```

Above, `withTitle` is a HOC that will always pass a title to
another component.

```js
import React from 'react';
import PropTypes from 'prop-types';
import { withTitle } from './withTitle';

function Header({ title, children }) {
  return (
    <header>
      <h2>{title}</h2>
      {children}
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Header;

const withTitleHeader = withTitle(Header);
export const CoolHeader = withTitleHeader('cool');
export const BadHeader = withTitleHeader('bad')
export const SiteHeader = withTitleHeader('My Site')
```

Above we created three additional `Header` components.

```js
import React from 'react';
import {
  CoolHeader,
  BadHeader,
  SiteHeader
} from './Header';

export default function App() {
  return (
    <>
      <SiteHeader>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </SiteHeader>
      <CoolHeader>
        <p>Cool!</p>
      </CoolHeader>
      <BadHeader>
        <ul>
          <li>Beaches</li>
          <li>Spiders</li>
          <li>pollution</li>
        </ul>
      </BadHeader>
    </>
  );
}
```

```js
import React from 'react';

export const withLoader = (Component, Loader = <h1>Loading</h1>) => {
  return function WithLoader(props) {
    const { loading, ...rest } = props;

    if(loading) return <hi
  }
}
```
