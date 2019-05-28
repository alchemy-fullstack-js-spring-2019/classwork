import React from 'react';
import PropTypes from 'prop-types';
import VideoThumbnail from './VideoThumbnail';

function VideoThumbnails({ thumbnails }) {
  const thumbnailList = thumbnails.map(url => (
    <li key={url}>
      <VideoThumbnail url={url} />
    </li>
  ));

  return (
    <ul>
      {thumbnailList}
    </ul>
  );
}

VideoThumbnails.propTypes = {
  thumbnails: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default VideoThumbnails;
