# React Data Flow

## Agenda

* Data Down
* Events Up
* Components
  * Container Components
  * Presentational Components

## Resources

* [Data Flows Down](https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down)
* [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## Data Down

In React data is passed from parent component to children components.
This means that children cannot update a parents data. It also means
that siblings cannot share data unless that data is owned by a common
parent.

```js
import React from 'react';
import PropTypes from 'prop-types'

function DisplayCount({ count }) {
  return <h1>{count}</h1>
}

DisplayCount.propTypes = {
  count: PropTypes.number.isRequired
};

export default DisplayCount;
```

```js
import React, { PureComponent } from 'react';
import DisplayCount from './DisplayCount';

export default class Count extends PureComponent {
  state = {
    count: 0
  }

  render() {
    return (
      <DisplayCount count={this.state.count} />
    )
  }
}
```

## Events Up

In order to update data a child component can emit an event. These
events are handled by the parent component who is responsible for
updating its state.

```js
import React from 'react';
import PropTypes from 'prop-types'

function DisplayCount({ count }) {
  return <h1>{count}</h1>
}

DisplayCount.propTypes = {
  count: PropTypes.number.isRequired
};

export default DisplayCount;
```

```js
import React from 'react';
import PropTypes from 'prop-types'

function IncrementCount({ incrementCount }) {
  return <button onClick={incrementCount}></button>
}

IncrementCount.propTypes = {
  incrementCount: PropTypes.func.isRequired
};

export default IncrementCount;
```

```js
import React, { PureComponent } from 'react';
import IncrementCount from './IncrementCount'
import DisplayCount from './DisplayCount';

export default class Count extends PureComponent {
  state = {
    count: 0
  }

  incrementCountHandler = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }

  render() {
    return (
      <>
        <IncrementCount incrementCount={this.incrementCountHandler} />
        <DisplayCount count={this.state.count} />
      </>
    )
  }
}
```

## Components

### Container Components

As a rule of thumb, container components are stateful (class)
components which deal how things work.

### Presentational Components

As a rule of thumb, presentational components are stateless
functional components which deal with how things look.
