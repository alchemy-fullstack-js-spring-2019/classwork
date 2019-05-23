export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (postId, comment) => ({
  type: CREATE_COMMENT,
  payload: { postId, comment }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postId, commentId) => ({
  type: DELETE_COMMENT,
  payload: { postId, commentId }
});
