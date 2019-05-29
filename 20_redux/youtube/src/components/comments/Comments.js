import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments }) {
  const commentList = comments.map((comment, i) => (
    <li key={i}>
      <Comment comment={comment} />
    </li>
  ));

  return (
    <ul>
      {commentList}
    </ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Comments;
