import React from 'react';
import PropTypes from 'prop-types';

function VideoThumbnail({ url }) {
  return (
    <img src={url} />
  );
}

VideoThumbnail.propTypes = {
  url: PropTypes.string.isRequired
};

export default VideoThumbnail;
