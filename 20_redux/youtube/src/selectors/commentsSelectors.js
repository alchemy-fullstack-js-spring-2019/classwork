export const getCommentsForVideo = (state, videoId) => {
  return state.comments[videoId] || [];
};
