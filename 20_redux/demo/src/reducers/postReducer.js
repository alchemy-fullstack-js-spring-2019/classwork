import { CREATE_POST, DELETE_POST } from '../actions/postActions';

const initialState = [
  { title: 'hi', body: 'connect' }
];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return [
        // grab everything before action.payload
        ...state.slice(0, action.payload),

        // grab everything after action.payload
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}
