import React from 'react';
import StoryReel from '../StoryReel';
import CreatePost from '../CreatePost';
import Post from '../Post';

import './Feed.scss';

function Feed(): React.ReactElement {
  return (
    <div className='feed'>
      <StoryReel />
      <CreatePost />
      <Post
        username='username'
        profilePic='https://images.unsplash.com/photo-1492546662075-aabebf46dee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80'
        image='https://images.unsplash.com/photo-1492546662075-aabebf46dee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80'
        text='hello'
      />
    </div>
  );
}

export default Feed;
