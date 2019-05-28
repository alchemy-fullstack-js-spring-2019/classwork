export const getVideos = state => state.videos;

export const getVideoThumbnails = state => {
  return getVideos(state)
    .map(videoId => {
      return `https://img.youtube.com/vi/${videoId}/0.jpg`;
    });
};
