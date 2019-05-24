import { combineReducers } from 'redux';
import posts from './postReducer';
import comments from './commentReducer';

const lunchInitialState = {
  drink: null,
  sandwich: null,
  chips: null
};

export default combineReducers({
  posts,
  comments,
  lunch(state = lunchInitialState, action) {
    return state;
  }
});
