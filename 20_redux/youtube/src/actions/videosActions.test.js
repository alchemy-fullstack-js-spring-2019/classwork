import { createVideo, CREATE_VIDEO } from './videosActions';

describe('videos actions', () => {
  it('creates a create video action', () => {
    expect(createVideo('abcd')).toEqual({
      type: CREATE_VIDEO,
      payload: 'abcd'
    });
  });
});
