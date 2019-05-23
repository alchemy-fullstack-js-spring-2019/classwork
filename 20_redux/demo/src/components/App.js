import React from 'react';
import AllPosts from '../containers/post/AllPosts';
import CreatePost from '../containers/post/CreatePost';

export default function App() {
  return (
    <>
      <CreatePost />
      <AllPosts title="hi" />
    </>
  );
}
