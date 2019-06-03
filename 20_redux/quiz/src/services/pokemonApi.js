import { get } from './request';

export const getPokemon = () => {
  return get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
    .then(json => json.results.map(pokemon => ({
      id: pokemon._id,
      name: pokemon.pokemon,
      image: pokemon.url_image
    })));
};

export const getPokemonDetail = id => {
  return get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${id}`)
    .then(pokemon => ({
      id: pokemon._id,
      name: pokemon.pokemon,
      image: pokemon.url_image
    }));
};
