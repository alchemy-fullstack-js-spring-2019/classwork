import React from 'react';
import PropTypes from 'prop-types';

function Score({ score }) {
  return (
    <p>{score}</p>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired
};

export default Score;
