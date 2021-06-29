import React from 'react';
import { Avatar, Button } from '@material-ui/core';

import { ChatBubbleOutlineRoundedIcon, NearMeRoundedIcon, ThumbUpRoundedIcon } from '../../utils/icons';
import { PostAction } from '..';

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
      <div className='bottomAction'>
        {/* {iconList.map(({ Icon, title, color }, index) => (
          <PostAction key={index} Icon={Icon} title={title} color={color} />
        ))} */}
        <div className='action'>
          <ThumbUpRoundedIcon className='postAction' />
          <h4>Like</h4>
        </div>

        <div className='action'>
          <ChatBubbleOutlineRoundedIcon className='postAction' />
          <h4>Comment</h4>
        </div>
        <div className='action'>
          <NearMeRoundedIcon className='postAction' />
          <h4>Share</h4>
        </div>
      </div>
    </div>
  );
}

const iconList = [
  {
    Icon: <ThumbUpRoundedIcon />,
    title: 'Like',
    color: 'grey'
  },
  {
    Icon: <ChatBubbleOutlineRoundedIcon />,
    title: 'Comment',
    color: 'grey'
  },
  {
    Icon: <NearMeRoundedIcon />,
    title: 'Share',
    color: 'grey'
  }
];

export default Post;
