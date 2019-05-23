import reducer from './postReducer';
import { createPost, deletePost } from '../actions/postActions';

describe('post reducer', () => {
  it('handle the create post action', () => {
    const initialState = [];
    const newState = reducer(initialState, createPost('hi', 'there'));

    expect(initialState).toEqual([]);
    expect(newState).toEqual([
      { title: 'hi', body: 'there' }
    ]);
  });

  it('handle the delete post action', () => {
    const initialState = [
      { title: 'my first post', body: 'it was good' },
      { title: 'my second post', body: 'it was not good' },
      { title: 'my third post', body: 'it was bad' }
    ];

    const newState = reducer(initialState, deletePost(1));

    expect(newState).toEqual([
      { title: 'my first post', body: 'it was good' },
      { title: 'my third post', body: 'it was bad' }
    ]);
  });
});
