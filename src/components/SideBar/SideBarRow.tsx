import { Avatar } from '@material-ui/core';
import React from 'react';

import './SideBar.scss';

interface SideBarRowProps {
  src?: string | null;
  title: string | null;
  url?: string;
  Icon?: any;
}

function SideBarRow(props: SideBarRowProps): React.ReactElement {
  const { src, title, url, Icon } = props;
  return (
    <div className='sideBarRow'>
      <div className='row'>
        {src && <Avatar src={src} />}
        {url && <img src={url} alt='' className='image' />}
        {Icon && <Icon fontSize='large' className='rowIcon' />}
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default SideBarRow;
