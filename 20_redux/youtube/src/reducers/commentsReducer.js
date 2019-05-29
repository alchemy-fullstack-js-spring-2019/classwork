import { CREATE_COMMENT } from '../actions/commentsActions';

const initialState = {
  dQw4w9WgXcQ: ['hi', 'it is good']
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.videoId]: [...(state[action.payload.videoId] || []), action.payload.comment]
      };
    default:
      return state;
  }
}
