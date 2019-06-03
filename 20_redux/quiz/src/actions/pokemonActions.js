import { getPokemon } from '../services/pokemonApi';
import { createAction } from 'promise-middleware-redux';

// export const FETCH_POKEMON_LOADING = 'FETCH_POKEMON_LOADING';
// export const FETCH_POKEMON = 'FETCH_POKEMON';

// export const fetchPokemon = page => ({
//   type: FETCH_POKEMON,
//   pendingType: FETCH_POKEMON_LOADING,
//   payload: getPokemon(page)
// });

export const [
  fetchPokemon,
  FETCH_POKEMON,
  FETCH_POKEMON_LOADING
] = createAction('FETCH_POKEMON', getPokemon);

export const INCREMENT_PAGE = 'INCREMENT_PAGE';
export const incrementPage = () => ({
  type: INCREMENT_PAGE
});

export const DECREMENT_PAGE = 'DECREMENT_PAGE';
export const decrementPage = () => ({
  type: DECREMENT_PAGE
});
