import { getVideos, getVideoThumbnails } from './videosSelectors';

describe('videos selectors', () => {
  it('gets a list of video ids', () => {
    const state = {
      videos: [
        'WQO-aOdJLiw',
        'c_zAW96Ncjk',
        'dQw4w9WgXcQ',
        'oHg5SJYRHA0'
      ]
    };

    expect(getVideos(state)).toEqual([
      'WQO-aOdJLiw',
      'c_zAW96Ncjk',
      'dQw4w9WgXcQ',
      'oHg5SJYRHA0'
    ]);
  });

  it('gets a list of video thumbnail urls', () => {
    const state = {
      videos: [
        'WQO-aOdJLiw',
        'c_zAW96Ncjk',
        'dQw4w9WgXcQ',
        'oHg5SJYRHA0'
      ]
    };

    expect(getVideoThumbnails(state)).toEqual([
      'https://img.youtube.com/vi/WQO-aOdJLiw/0.jpg',
      'https://img.youtube.com/vi/c_zAW96Ncjk/0.jpg',
      'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
      'https://img.youtube.com/vi/oHg5SJYRHA0/0.jpg'
    ]);
  });
});
