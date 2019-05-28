export const getVideos = state => state.videos;

export const getVideoThumbnails = state => {
  return getVideos(state)
    .map(videoId => ({
      id: videoId,
      url: `https://img.youtube.com/vi/${videoId}/0.jpg`
    }));
};

export const getVideoUrl = (state, videoId) => {
  return `https://youtube.com/embed/${videoId}`;
};
