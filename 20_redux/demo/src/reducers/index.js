import { combineReducers } from 'redux';
import posts from './postReducer';
import comments from './commentReducer';

// {
//   posts: [{}],
//   comments: {}
// }
export default combineReducers({
  posts,
  comments
});
