import { getVideos, getVideoThumbnails, getVideoUrl } from './videosSelectors';

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
      { id: 'WQO-aOdJLiw', url: 'https://img.youtube.com/vi/WQO-aOdJLiw/0.jpg' },
      { id: 'c_zAW96Ncjk', url: 'https://img.youtube.com/vi/c_zAW96Ncjk/0.jpg' },
      { id: 'dQw4w9WgXcQ', url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg' },
      { id: 'oHg5SJYRHA0', url: 'https://img.youtube.com/vi/oHg5SJYRHA0/0.jpg' }
    ]);
  });

  it('gets a video url by id', () => {
    const videoId = 'c_zAW96Ncjk';
    const url = getVideoUrl([], videoId);

    expect(url).toEqual('https://youtube.com/embed/c_zAW96Ncjk');
  });
});
