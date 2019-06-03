import { FETCH_POKEMON_LOADING, FETCH_POKEMON } from '../actions/pokemonActions';

const initialState = {
  list: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POKEMON_LOADING:
      return { ...state, loading: true };
    case FETCH_POKEMON:
      return { ...state, loading: false, list: action.payload };
    default:
      return state;
  }
}
