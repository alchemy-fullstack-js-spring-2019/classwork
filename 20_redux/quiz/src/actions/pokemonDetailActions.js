import { getPokemonDetail } from '../services/pokemonApi';

export const FETCH_POKEMON_DETAIL_LOADING = 'FETCH_POKEMON_DETAIL_LOADING';
export const FETCH_POKEMON_DETAIL = 'FETCH_POKEMON_DETAIL';

export const fetchPokemonDetail = id => ({
  type: FETCH_POKEMON_DETAIL,
  pendingType: FETCH_POKEMON_DETAIL_LOADING,
  payload: getPokemonDetail(id)
});
