import { FETCH_QUOTES, FETCH_QUOTES_LOADING } from '../actions/quotesActions';
import { isCorrect } from '../services/gameService';
import { SELECT_ANSWER } from '../actions/gameActions';

const initialState = {
  list: [],
  loading: true,
  error: null,
  currentQuote: 0,
  points: 50
};

const updateAnswer = (state, character) => {
  const correct = isCorrect(character, state.currentQuote, state.list);
  if(correct) {
    return { ...state, points: state.points + 1, currentQuote: state.currentQuote + 1 };
  }

  return { ...state, points: state.points - 1, currentQuote: state.currentQuote + 1 };
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTES:
      return { ...state, list: action.payload, loading: false };
    case FETCH_QUOTES_LOADING:
      return { ...state, loading: true };
    case SELECT_ANSWER:
      return updateAnswer(state, action.payload);
    default:
      return state;
  }
}
