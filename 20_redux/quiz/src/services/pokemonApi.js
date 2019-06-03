import { get } from './request';

export const getPokemon = page => {
  return get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${page}`)
    .then(json => {
      const totalPages = Math.ceil(json.count / json.perPage);
      return {
        totalPages,
        currentPage: json.page,
        results: json.results.map(pokemon => ({
          id: pokemon._id,
          name: pokemon.pokemon,
          image: pokemon.url_image
        }))
      };
    });
};

export const getPokemonDetail = id => {
  return get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${id}`)
    .then(pokemon => ({
      id: pokemon._id,
      name: pokemon.pokemon,
      image: pokemon.url_image
    }));
};
