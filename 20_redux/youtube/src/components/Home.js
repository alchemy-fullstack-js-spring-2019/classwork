import React from 'react';
import CreateVideo from '../containers/videos/CreateVideo';
import AllThumbnails from '../containers/thumbnails/AllThumbnails';

export default function Home() {
  return (
    <>
      <CreateVideo />
      <AllThumbnails />
    </>
  );
}
