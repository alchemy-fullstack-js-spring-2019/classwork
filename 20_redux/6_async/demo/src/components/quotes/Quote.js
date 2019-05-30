import React from 'react';
import PropTypes from 'prop-types';

function Quote({ text }) {
  return (
    <section>
      <p>{text}</p>
    </section>
  );
}

Quote.propTypes = {
  text: PropTypes.string.isRequired
};

export default Quote;
