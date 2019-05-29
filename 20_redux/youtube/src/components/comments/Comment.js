import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return <p>{comment}</p>;
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired
};

export default Comment;
