import { getPokemon } from '../services/pokemonApi';

export const FETCH_POKEMON_LOADING = 'FETCH_POKEMON_LOADING';
export const FETCH_POKEMON = 'FETCH_POKEMON';

export const fetchPokemon = () => ({
  type: FETCH_POKEMON,
  pendingType: FETCH_POKEMON_LOADING,
  payload: getPokemon()
});
