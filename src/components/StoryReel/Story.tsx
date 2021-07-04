import { Avatar } from '@material-ui/core';
import React from 'react';

import './StoryReel.scss';

interface StoryProps {
  storyImage: string;
  profilePic: string;
  username: string;
}

function Story(props: StoryProps): React.ReactElement {
  const { storyImage, profilePic, username } = props;
  return (
    <div
      className='story'
      style={{
        backgroundImage: `url(${storyImage})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Avatar src={profilePic} className='storyAvatar' />
      <h4>{username}</h4>
    </div>
  );
}

export default Story;
