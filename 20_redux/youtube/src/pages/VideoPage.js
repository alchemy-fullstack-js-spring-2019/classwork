import React from 'react';
import PlayVideo from '../containers/videos/PlayVideo';
import CommentsForVideo from '../containers/comments/CommentsForVideo';
import CreateComment from '../containers/comments/CreateComment';

export default function VideoPage() {
  return (
    <>
      <PlayVideo />
      <CreateComment />
      <CommentsForVideo />
    </>
  );
}
