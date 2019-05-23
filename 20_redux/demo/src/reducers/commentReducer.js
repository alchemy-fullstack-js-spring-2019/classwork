import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';
import { DELETE_POST } from '../actions/postActions';

const deletePostComments = (state, id) => {
  const newState = { ...state };
  delete newState[id];
  return newState;
};

export default function reducer(state = {}, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.postId]: [
          ...(state[action.payload.postId] || []),
          action.payload.comment
        ]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.postId]: [
          ...state[action.payload.postId].slice(0, action.payload.commentId),
          ...state[action.payload.postId].slice(action.payload.commentId + 1),
        ]
      };
    case DELETE_POST:
      return deletePostComments(state, action.payload);
    default:
      return state;
  }
}
