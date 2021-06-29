import { Avatar } from '@material-ui/core';
import React from 'react';

import './Post.scss';

interface PostProps {
  profilePic: string;
  username: string;
  text?: string;
  timestamp?: Date;
  image?: string;
}

function Post(props: PostProps): React.ReactElement {
  const { profilePic, username, text, timestamp, image } = props;
  return (
    <div className='post'>
      <div className='top'>
        <Avatar src={profilePic} />
        <div className='info'>
          <h4>{username}</h4>
          <span>time {timestamp}</span>
        </div>
      </div>
      <div className='text'>
        <p>{text}</p>
      </div>
      <div className='image'>
        <img src={image} alt='Post Image' />
      </div>
    </div>
  );
}

export default Post;
