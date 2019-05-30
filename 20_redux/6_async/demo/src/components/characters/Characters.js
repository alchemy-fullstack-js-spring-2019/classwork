import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './Characters.css';

function Characters({ characters, selectCharacter }) {
  const characterList = characters.map(character => (
    <li key={character.name} onClick={() => selectCharacter(character.name)}>
      <Character character={character} />
    </li>
  ));

  return (
    <ul className={styles.Characters}>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  selectCharacter: PropTypes.func.isRequired
};

export default Characters;
