export const CREATE_VIDEO = 'CREATE_VIDEO';
export const createVideo = videoId => ({
  type: CREATE_VIDEO,
  payload: videoId
});
