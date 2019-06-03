import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Pokemon({ pokemon }) {
  return (
    <Link to={`/${pokemon.id}`}>
      <img src={pokemon.image} />
      <p>{pokemon.name}</p>
    </Link>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default Pokemon;
