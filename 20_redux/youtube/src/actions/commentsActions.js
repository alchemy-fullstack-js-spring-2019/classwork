export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (videoId, comment) => ({
  type: CREATE_COMMENT,
  payload: { videoId, comment }
});
