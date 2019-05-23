import {
  CREATE_POST,
  createPost,
  deletePost,
  DELETE_POST
} from './postActions';

describe('post actions', () => {
  it('creates a create post action', () => {
    expect(createPost('hi', 'there')).toEqual({
      type: CREATE_POST,
      payload: { title: 'hi', body: 'there' }
    });
  });

  it('creates a delete post action', () => {
    expect(deletePost(12)).toEqual({
      type: DELETE_POST,
      payload: 12
    });
  });
});
