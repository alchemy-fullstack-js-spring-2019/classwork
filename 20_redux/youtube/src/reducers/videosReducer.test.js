import reducer from './videosReducer';

describe('video reducer', () => {
  it('returns an empty array on initialization', () => {
    const newState = reducer(undefined, {
      type: '@@INIT'
    });

    expect(newState).toEqual([
      'WQO-aOdJLiw',
      'c_zAW96Ncjk',
      'dQw4w9WgXcQ',
      'oHg5SJYRHA0'
    ]);
  });
});
