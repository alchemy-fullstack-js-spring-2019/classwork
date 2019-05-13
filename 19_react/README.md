# React

## Agenda

* Components
  * modular reusable views
* JSX
* Rendering elements
* Testing

## Dependencies

* `npm i react react-dom`
* `npm i -D @babel/preset-react @babel/plugin-proposal-class-properties`
* `npm i -D eslint-plugin-react`
* `npm i -D enzyme enzyme-adapter-react-16 enzyme-to-json`

## Resources

* [JSX](https://reactjs.org/docs/introducing-jsx.html)
* [Rendering](https://reactjs.org/docs/rendering-elements.html)
* [Enzyme](https://airbnb.io/enzyme/)

## Updated configuration

### .babelrc

```js
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}
```

### .eslintrc

```js
{
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "browser": true,
    "jest": true
  },
  "plugins": [
    "babel",
    "react"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "space-in-parens": [
      "error"
    ],
    "space-infix-ops": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "comma-spacing": "error",
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true,
        "overrides": {
          "do": {
            "after": false
          },
          "for": {
            "after": false
          },
          "if": {
            "after": false
          },
          "switch": {
            "after": false
          },
          "while": {
            "after": false
          },
          "catch": {
            "after": false
          }
        }
      }
    ],
    "array-bracket-spacing": "error",
    "babel/no-invalid-this": 1,
    "babel/semi": 0
  }
}
```

## Components

To better reason about our web applications its often useful to break each
page into multiple smaller views. These smaller views are called components.

In addition to being easier to reason about, these smaller components also
simplify code reuse through composition. Each component can be made up of
other components, composing a greater whole.

## JSX

JSX is HTML looking JavaScript that can be used to create React elements.
Anywhere you use JSX you must import `react`

```js
import React from 'react';

const element = <h1>My Header</h1>;
```

```js
const dogElement = (
  <dl>
    <dt>Name</dt>
    <dd>Spot</dd>

    <dt>Age</dt>
    <dd>5</dd>

    <dt>Weight</dt>
    <dd>20 lbs</dd>
  </dl>
)
```

Ultimately, JSX is JavaScript. We can evaluate JavaScript between `{}` inside of our JSX.

```js
const title = 'My Header'
const element = <h1>{title}</h1>
```

```js
const dog = {
  name: 'Spot',
  age: 5,
  weight: '20 lbs'
};

const dogElement = (
  <dl>
    <dt>Name</dt>
    <dd>{dog.name}</dd>

    <dt>Age</dt>
    <dd>{dog.age}</dd>

    <dt>Weight</dt>
    <dd>{dog.weight}</dd>
  </dl>
)
```

## Rendering React

We can render react components onto a page by selecting a node and
filling it with our react component

```js
// src/index.js
import React from 'react';
import { render } from 'react-dom';

const element = <h1>React!</h1>;

render(
  element,
  document.getElementById('root')
);
```

Typically we render a single `App` component which is responsible for
structuring our application and rendering other components.

```js
// src/index.js
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(
  <App />,
  document.getElementById('root')
);
```

### React Components

React components can be written as functions that return elements.

```js
// src/components/App.js
import React from 'react'

export default function App() {
  return <h1>Hi</h1>
}
```

```js
// src/components/App.js
import React from 'react';

export default function App() {
  const dog = {
    name: 'Spot',
    age: 5,
    weight: '20 lbs'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{dog.name}</dd>

      <dt>Age</dt>
      <dd>{dog.age}</dd>

      <dt>Weight</dt>
      <dd>{dog.weight}</dd>
    </dl>
  )
}
```

### React Component Composition

```js
// src/index.js
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(
  <App />,
  document.getElementById('root')
);
```

```js
// src/components/Header.js
import React from 'react';

export default function Header() {
  return <h1>My Dog</h1>
}
```

```js
// src/components/Dog.js
import React from 'react';

export default function Dog() {
  const dog = {
    name: 'Spot',
    age: 5,
    weight: '20 lbs'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{dog.name}</dd>

      <dt>Age</dt>
      <dd>{dog.age}</dd>

      <dt>Weight</dt>
      <dd>{dog.weight}</dd>
    </dl>
  )
}
```

```js
// src/components/App.js
import React from 'react';
import Dog from './Dog';

export default function App() {
  return (
    <>
      <Header />
      <Dog />
    </>
  )
}
```

## Snapshot Testing

Snapshot tests will store the HTML that a component creates inside
a file. We can then check the file to make sure that the resulting
HTML is what we expect. Going forward, anytime the HTML that our
component creates changes our test will fail.

```js
import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog component', () => {
  it('renders a Dog', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
```
