import React from 'react';
import { AddRoundedIcon } from '../../utils/icons';
import Story from './Story';

import './StoryReel.scss';

interface StoryReelProps {
  photoUrl?: string;
}

function StoryReel({ photoUrl }: StoryReelProps): React.ReactElement {
  return (
    <div className='storyReel'>
      <div className='createStory'>
        <img src={photoUrl} alt='profile-pic' />
        <div className='lower'>
          <div className='circle'>
            <AddRoundedIcon />
          </div>
          <h5>Create Story</h5>
        </div>
      </div>
      {storyList.map(({ username, storyImage, profilePic }, index) => (
        <Story key={index} username={username} profilePic={profilePic} storyImage={storyImage} />
      ))}
    </div>
  );
}

export default StoryReel;

const storyList = [
  {
    username: 'John Doe',
    storyImage:
      'https://images.unsplash.com/photo-1611698529145-9fabdd4720c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    profilePic:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    username: 'Blake Cheek',
    storyImage:
      'https://images.unsplash.com/photo-1625339591418-46878dce5f69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    profilePic:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
  },
  {
    username: 'Bella',
    storyImage:
      'https://images.unsplash.com/photo-1625007387168-cb24505afb14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    profilePic:
      'https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    username: 'Adam Samson',
    storyImage:
      'https://images.unsplash.com/flagged/photo-1569231290150-9c6200705c5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    profilePic:
      'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
  }
];
