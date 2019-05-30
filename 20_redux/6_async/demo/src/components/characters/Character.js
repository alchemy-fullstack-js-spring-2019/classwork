import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <section>
      <img src={character.image} />
      <p>{character.name}</p>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
