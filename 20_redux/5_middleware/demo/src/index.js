import {
  createStore,
  applyMiddleware
} from 'redux';


// function logger(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }

// store is the redux store
// next is a function to move to the next middleware
// action is the dispatched action
const logger = store => next => action => {
  console.log('Before reducer', store.getState());
  next(action);
  console.log('After reducer', store.getState());
};

const logger2 = store => next => action => {
  console.log('i am another middleware!', action);
  next(action);
};

function reducer(state = {}, action) {
  switch(action.type) {
    case 'HI':
      return 'hi';
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  applyMiddleware(logger, logger2)
);

store.dispatch({
  type: 'HI'
});
