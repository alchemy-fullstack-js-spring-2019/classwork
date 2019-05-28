import { combineReducers } from 'redux';
import videos from './videosReducer';
import comments from './commentsReducer';

export default combineReducers({
  videos,
  comments
});
