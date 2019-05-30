import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

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
  // before the reducer has changed state
  console.log('Before reducer', store.getState());

  next(action); // go to the next middleware

  // after the reducer has changed state
  console.log('After reducer', store.getState());
};

const logger2 = store => next => action => {
  console.log('i am another middleware!', action);
  next(action);
};

function reducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_CHARACTERS':
      return action.payload;
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  // applyMiddleware is like app.use
  applyMiddleware(logger, logger2, thunk)
);

// function fetchCharacters() {
//   return function(dispatch) {
//     return fetch('https://rickandmortyapi.com/api/character/')
//       .then(res => res.json())
//       .then(results => {
//         dispatch({
//           type: 'FETCH_CHARACTERS',
//           payload: results.results
//         });
//       });
//   }
// }

// action creator
const fetchCharacters = () => dispatch => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(results => {
      dispatch({
        type: 'FETCH_CHARACTERS',
        payload: results.results
      });
    });
};

store.dispatch(fetchCharacters());
