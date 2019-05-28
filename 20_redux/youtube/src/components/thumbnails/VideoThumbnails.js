import React from 'react';
import PropTypes from 'prop-types';
import VideoThumbnail from './VideoThumbnail';

function VideoThumbnails({ thumbnails }) {
  const thumbnailList = thumbnails.map(({ id, url }) => (
    <li key={id}>
      <VideoThumbnail id={id} url={url} />
    </li>
  ));

  return (
    <ul>
      {thumbnailList}
    </ul>
  );
}

VideoThumbnails.propTypes = {
  thumbnails: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default VideoThumbnails;
