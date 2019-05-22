# Redux Actions

## Agenda

* action creators
* type constants
* actions directory

## Resources

* [Actions](https://redux.js.org/basics/actions)

## Actions Creators

While passing objects to `store.dispatch` is fine, its often better
to use an action creator. An action creator is a function that creates
an action object.

```js
const addDrink = drink => ({
  type: 'ADD_DRINK',
  payload: drink
});
```

Now, anytime we want to add a drink we can dispatch the result of our
action creator.

```js
store.dispatch(addDrink('water'));
```

## Type Constants

To prevent typos and improve consistency we often create a `const` for
each action type.

```js
const ADD_DRINK = 'ADD_DRINK';
const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});
```

We can then reuse this type in our reducer.

```js
function reducer(state, action) {
  switch(action.type) {
    case ADD_DRINK:
      // do stuff
    default:
      return state
  }
}
```

## Action directory

To improve usability and readability we often create a directory
for our action creators `src/actions`. Inside of that directory
we create a new file for similar actions `src/actions/lunchActions.js`

```js
export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});
```
