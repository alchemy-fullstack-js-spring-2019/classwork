import { CREATE_VIDEO } from '../actions/videosActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_VIDEO:
      return [...state, action.payload];
    default:
      return state;
  }
}
