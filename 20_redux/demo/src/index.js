import { createStore } from 'redux';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'FILL_BOX':
      return { ...action.payload };
    case 'EMPTY_BOX':
      return initialState;
    default:
      return state;
  }
}

const store = createStore(reducer);

// componentDidMount
const myUnsubscribe = store.subscribe(() => {
  console.log('UDPTADED');
});

console.log(store.getState());

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'water'
});

console.log('after add water', store.getState());

// componentWillUnmount
myUnsubscribe();

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'cheese'
});

console.log('after add cheese', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'plain'
});

console.log('after adding plain chips', store.getState());

store.dispatch({
  type: 'EMPTY_BOX'
});

console.log('empty', store.getState());

store.dispatch({
  type: 'FILL_BOX',
  payload: {
    drink: 'juice',
    sandwich: 'pb&j',
    chips: 'cheetos'
  }
});

console.log('filled', store.getState());
