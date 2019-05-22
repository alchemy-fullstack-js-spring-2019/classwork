# Redux Selectors

## Agenda

* selectors
* deriving data

## Selectors

```js
export const getDrink = state => state.lunch.drink;
export const getSandwich = state => state.lunch.sandwich;
export const getChips = state => state.lunch.chips;

console.log(getDrink(store.getState())); // prints drink
```

## Deriving Data

You can also use selectors to derive data from state.

```js
export const getDrink = state => state.lunch.drink;
export const getSandwich = state => state.lunch.sandwich;
export const getChips = state => state.lunch.chips;
export const getItems = state => {
  return [getDrink(state), getSandwich(state), getChips(state)]
    .filter(Boolean); // remove nulls
};
export const getItemCount = state => getItems(state).length
```
