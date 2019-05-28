import reducer from './videosReducer';
import { createVideo } from '../actions/videosActions';

describe('video reducer', () => {
  it('returns an empty array on initialization', () => {
    const newState = reducer(undefined, {
      type: '@@INIT'
    });

    expect(newState).toEqual([]);
  });

  it('handles the create video action', () => {
    const newState = reducer([], createVideo('abcd'));

    expect(newState).toEqual([
      'abcd'
    ]);
  });
});
