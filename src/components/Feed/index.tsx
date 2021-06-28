import React from 'react';
import StoryReel from '../Story';
import CreatePost from '../CreatePost';

import './Feed.scss';

function Feed(): React.ReactElement {
  return (
    <div className='feed'>
      <StoryReel />
      <CreatePost />
      {/* Display post */}
    </div>
  );
}

export default Feed;
