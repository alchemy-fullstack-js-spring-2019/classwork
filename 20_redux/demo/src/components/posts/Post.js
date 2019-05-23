import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <p>{post.title}</p>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
