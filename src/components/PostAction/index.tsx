import React from 'react';

import './PostAction.scss'

interface PostActionProps {
  Icon: any;
  title: string;
  color: string;
}

function PostAction(props: PostActionProps): React.ReactElement {
  const { Icon, title, color } = props;
  return (
    <div className='actions'>
      <Icon style={{ color: `${color}` }} />
      <h5>{title}</h5>
    </div>
  );
}

export default PostAction;
