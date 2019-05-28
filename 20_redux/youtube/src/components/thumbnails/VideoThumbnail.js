import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function VideoThumbnail({ id, url }) {
  return (
    <Link to={`/${id}`}>
      <img src={url} />
    </Link>
  );
}

VideoThumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default VideoThumbnail;
