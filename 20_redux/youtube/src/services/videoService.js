export const isUrl = videoIdOrUrl => {
  const pattern = /https?:\/\/.*\..*/;
  return pattern.test(videoIdOrUrl);
};

export const getIdFromUrl = url => {
  const pattern = /\?v\=(?<id>[^&]*)/;
  return url.match(pattern).groups.id;
};

export const getVideoId = urlOrVideoId => {
  if(isUrl(urlOrVideoId)) return getIdFromUrl(urlOrVideoId);

  return urlOrVideoId;
};
