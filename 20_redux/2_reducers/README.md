# Redux Reducers

## Agenda

* reducers directory
* type constants
* combine reducers

## Resources

* [Reducers](https://redux.js.org/basics/reducers)

## Reducers directory

To improve usability and readability we often create a directory
for our reducers `src/reducers`. Inside of that directory
we create a new file for each reducer `src/reducer/lunchReducer.js`

```js
const initialState = {
  stuff: 'unfinished'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case: 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}
```

## Type Constants

To prevent typos and improve consistency we often create a `const` for
each action type and import them into our reducer file.

```js
import { DO_STUFF } from '../action/doActions.js';

const initialState = {
  stuff: 'unfinished'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DO_STUFF:
      return { stuff: 'done' };
    default:
      return state;
  }
}
```

## Combine Reducers

As our store gets larger and our reducer begins to handle more
state, its often best to start splitting our reducer into multiple
reducers.

```js
// src/reducers/lunchReducer.js
import {
  ADD_DRINK,
  ADD_SANDWICH,
  ADD_CHIPS,
  REMOVE_DRINK,
  REMOVE_SANDWICH,
  REMOVE_CHIPS
} from '../actions/lunchActions';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case REMOVE_SANDWICH:
      return { ...state, sandwich: null };
    case REMOVE_CHIPS:
      return { ...state, chips: null };
    default:
      return state;
  }
}
```

```js
// src/reducers/doReducer.js
import {
  DO_STUFF
} from '../actions/doActions';

const initialState = {
  stuff: 'unfinished'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case: DO_STUFF:
      return { stuff: 'done' };
    default:
      return state;
  }
}
```

We can then combine these reducers.

```js
// src/reducers/index.js
import { combineReducers } from 'redux';
import lunch from './lunchReducer';
import do from './doReducer';

export default combineReducers({
  lunch,
  do
});
```

This results in a store object with all lunch state nested in a
lunch key and all do state nested in a do key.

```js
{
  lunch: {
    drink: null,
    sandwich: null,
    chips: null
  },
  do: {
    stuff: 'unfinished'
  }
}
```
