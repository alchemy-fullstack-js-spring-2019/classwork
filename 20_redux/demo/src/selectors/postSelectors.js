export const getPosts = state => state.posts.map((post, id) => ({
  ...post,
  id
}));

export const getPost = (state, id) => getPosts(state)[id];
