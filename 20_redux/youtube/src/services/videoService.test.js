import { isUrl, getIdFromUrl, getVideoId } from './videoService';

describe('video services', () => {
  it('can tell if a string is a url', () => {
    const url = 'http://google.com';

    expect(isUrl(url)).toBeTruthy();
  });

  it('can tell if a string is not a url', () => {
    const url = 'http1234';

    expect(isUrl(url)).toBeFalsy();
  });

  it('can extract id from url', () => {
    const url = 'https://www.youtube.com/watch?v=c_zAW96Ncjk';

    expect(getIdFromUrl(url)).toEqual('c_zAW96Ncjk');
  });

  it('get id from string when it is an id', () => {
    const id = 'c_zAW96Ncjk';

    expect(getVideoId(id)).toEqual('c_zAW96Ncjk');
  });

  it('get id from string when it is a url', () => {
    const url = 'https://www.youtube.com/watch?v=c_zAW96Ncjk';

    expect(getVideoId(url)).toEqual('c_zAW96Ncjk');
  });
});
