import { Avatar } from '@material-ui/core';
import React from 'react';

import './StoryReel.scss';

interface StoryProps {
  storyImage: string;
  profilePic: string;
  title: string;
}

function Story(props: StoryProps): React.ReactElement {
  const { storyImage, profilePic, title } = props;
  return (
    <div
      className='story'
      style={{
        backgroundImage: `url(${storyImage})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Avatar src={profilePic} className='storyAvatar' />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
