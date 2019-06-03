import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

function PokemonList({ pokemonList }) {
  const pokemonItems = pokemonList.map(pokemon => (
    <li key={pokemon.id}>
      <Pokemon pokemon={pokemon} />
    </li>
  ));

  return (
    <ul>
      {pokemonItems}
    </ul>
  );
}

PokemonList.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
};

export default PokemonList;
