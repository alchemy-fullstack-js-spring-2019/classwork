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

Closures enclose an environment with a function. This mean we
can store state across function invocation.

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

Above we created a `counter` function with stores a count and
returns a function that can access the count. On every invocation
we increment the count and return its new value.

We can also use closures to create a simple cache.

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

Above we create a cache object. We then return a function that takes
`n`. If the cache has a key `n` then we return that value. Otherwise,
we call `factorial(n)` and store that result in our cache.

### Higher order components

Higher order components (HOCs) are functions that take components
and return components. HOCs allow us to reuse functionality with
multiple components.

```js
import React from 'react;

export const withTitle = Component => title => {
  return function WithTitle(props) {
    return <Component title={title} {...props} />
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

Similarly, we can create a HOC that will conditionally display
a loading component if a loading property is true.

```js
import React from 'react';

function DefaultLoader() {
  return <h1>Loading</h1>;
}

export const withLoader = (Component, Loader = DefaultLoader) => {
  return function WithLoader(props) {
    const { loading, ...rest } = props;

    if(loading) return <Loader {...rest} />;

    return <Component {...rest} />
  }
}
```

Our HOC above takes two arguments. The first parameter, `Component` is the
component we want to render when not loading. The second parameter, `Loader`
is the component that we want to render when loading.

```js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withLoading from '../../components/withLoading';
import Quotes from '../../components/quotes/Quotes';
import Loading from '../../components/Loading'
import { getQuotes } from '../../services/futuramaApi.js';

const LoadingQuotes = withLoading(Quotes, Loading);

export default class TopQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }

  state = {
    quotes: [],
    loading: true
  }

  fetchQuotes = () => {
    this.setState({ loading: true })
    getQuotes(this.props.count)
      .then(quotes => this.setState({ quotes, loading: false }));
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.count  !== this.props.count) {
      this.fetchQuotes();
    }
  }

  render() {
    const props = { ...this.state }
    return <LoadingQuotes {...props} />;
  }
}
```

We can also make a `withFetch` HOC that will fetch from an API.

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withFetch = (fetchFn, initialState, key = 'results') => Comp => {
  class WithFetch extends Component {
    static propTypes = {
      page: PropTypes.string.isRequired
    }

    state = {
      results: initialState,
      loading: false
    }

    fetch = () => {
      this.setState({ loading: true });
      fetchFn(this.props.page)
        .then(results => this.setState({ results, loading: false }))
    }

    componentDidMount() {
      this.fetch();
    }

    componentDidUpdate(prevProps) {
      if(prevProps.page !== this.props.page) {
        this.fetch();
      }
    }

    render() {
      const { results, loading } = this.state;
      const props = { [key]: results, loading, ...this.props };
      return <Comp {...props} />;
    }
  }

  return WithFetch;
}
```

Above, we pass our HOC a few different arguments:

Argument name | Argument purpose
------------- | ----------------
`fetchFn` | service used to fetch from an API
`initialState` | the initial value of our state (probably an array or object)
`key` | the name of the property we should pass the API result as to `Comp`
`Comp` | the component we should render with the results from the API

```js
import React from 'react';
import Characters from '../../components/characters/Characters';
import withLoading from '../../components/withLoading';
import withFetch from '../../components/withFetch';
import Loading from '../../components/Loading';
import { getCharacters } from '../../services/rickAndMortyApi';

const LoadingCharacters = withLoading(Characters, Loading);
export default withFetch(getCharacters, [], 'characters')(LoadingCharacters);
```
