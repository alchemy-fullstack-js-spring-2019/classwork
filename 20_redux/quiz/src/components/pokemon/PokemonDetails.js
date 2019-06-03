import React from 'react';
import PropTypes from 'prop-types';

function PokemonDetail({ pokemon }) {
  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} />
    </>
  );
}

PokemonDetail.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default PokemonDetail;
