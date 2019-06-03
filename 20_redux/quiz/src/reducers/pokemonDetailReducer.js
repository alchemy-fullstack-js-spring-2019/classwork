import {
  FETCH_POKEMON_DETAIL_LOADING,
  FETCH_POKEMON_DETAIL
} from '../actions/pokemonDetailActions';
const initialState = {
  detail: null,
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POKEMON_DETAIL_LOADING:
      return { ...state, loading: true };
    case FETCH_POKEMON_DETAIL:
      return { ...state, loading: false, detail: action.payload };
    default:
      return state;
  }
}
