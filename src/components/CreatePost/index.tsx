import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';

import { PostAction } from '..';
import { InsertEmoticonOutlinedIcon, PhotoLibraryRoundedIcon, VideocamRoundedIcon } from '../../utils/icons';

import './CreatePost.scss';

function CreatePost(): React.ReactElement {
  const [input, setInput] = useState<string>('');
  const [imgUrl, setImgUrl] = useState<string>('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // TODO: Db connections

    setInput('');
    setImgUrl('');
  };

  return (
    <div className='createPost'>
      <div className='top'>
        <Avatar />
        <form className='form'>
          <input
            className='textInput'
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="What's on your mind?"
          />
          <input
            className='imgUrlInput'
            value={imgUrl}
            onChange={e => setImgUrl(e.target.value)}
            placeholder='Image URL (optional)'
          />
          <button onClick={handleSubmit} type='submit'>
            Hidden Submit
          </button>
        </form>
      </div>
      <div className='bottom'>
        {bottomIcon.map(({ Icon, title, color }, index) => (
          <PostAction key={index} Icon={Icon} title={title} color={color} />
        ))}
      </div>
    </div>
  );
}

export default CreatePost;

const bottomIcon = [
  {
    Icon: VideocamRoundedIcon,
    title: 'Live Video',
    color: 'red'
  },
  {
    Icon: PhotoLibraryRoundedIcon,
    title: 'Photo/Video',
    color: 'green'
  },
  {
    Icon: InsertEmoticonOutlinedIcon,
    title: 'Feeling/Activity',
    color: 'orange'
  }
];
