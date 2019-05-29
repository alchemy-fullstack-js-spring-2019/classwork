import React from 'react';
import PropTypes from 'prop-types';

function Video({ url }) {
  return (
    <iframe
      width="560"
      height="315"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired
};

export default Video;
