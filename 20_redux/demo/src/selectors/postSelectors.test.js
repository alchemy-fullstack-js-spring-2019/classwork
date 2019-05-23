import { getPosts, getPost } from './postSelectors';

describe('post selectors', () => {
  it('gets all posts', () => {
    const state = {
      posts: [
        { title: 'hi', body: 'what?' },
        { title: 'test', body: 'who?' }
      ]
    };

    expect(getPosts(state)).toEqual([
      { id: 0, title: 'hi', body: 'what?' },
      { id: 1, title: 'test', body: 'who?' }
    ]);
  });

  it('gets a post by index', () => {
    const state = {
      posts: [
        { title: 'hi', body: 'what?' },
        { title: 'test', body: 'who?' }
      ]
    };

    expect(getPost(state, 0)).toEqual({ id: 0, title: 'hi', body: 'what?' });
  });
});
