import React from 'react';
import SideBarRow from './SideBarRow';
import {
  StorefrontRoundedIcon,
  LocalHospitalRoundedIcon,
  GroupRoundedIcon,
  ChatRoundedIcon,
  VideoLibraryRoundedIcon,
  FlagRoundedIcon
} from '../../utils/icons';

import './SideBar.scss';

function SideBar(): React.ReactElement {
  return (
    <div className='sideBar'>
      <SideBarRow
        src='https://images.unsplash.com/photo-1492546662075-aabebf46dee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80'
        title='username'
      />
      {rowIconList.map(({ Icon, title }, index) => (
        <SideBarRow key={index} title={title} Icon={Icon} />
      ))}
    </div>
  );
}

const rowIconList = [
  {
    Icon: LocalHospitalRoundedIcon,
    title: 'COVID-19 Information Center'
  },
  {
    Icon: FlagRoundedIcon,
    title: 'Pages'
  },
  {
    Icon: GroupRoundedIcon,
    title: 'Friends'
  },
  {
    Icon: ChatRoundedIcon,
    title: 'Messenger'
  },
  {
    Icon: StorefrontRoundedIcon,
    title: 'Marketplace'
  },
  {
    Icon: VideoLibraryRoundedIcon,
    title: 'Videos'
  }
];

export default SideBar;
