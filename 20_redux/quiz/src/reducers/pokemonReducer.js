import { FETCH_POKEMON_LOADING, FETCH_POKEMON, INCREMENT_PAGE, DECREMENT_PAGE } from '../actions/pokemonActions';

const initialState = {
  list: [],
  loading: false,
  totalPages: 0,
  currentPage: 1
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POKEMON_LOADING:
      return { ...state, loading: true };
    case FETCH_POKEMON:
      return { ...state, loading: false, totalPages: action.payload.totalPages, list: action.payload.results };
    case INCREMENT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case DECREMENT_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };
    default:
      return state;
  }
}
