import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';

import {
  SearchIcon,
  HomeRoundedIcon,
  SubscriptionsRoundedIcon,
  SupervisedUserCircleRoundedIcon,
  AddRoundedIcon,
  NotificationsRoundedIcon,
  StorefrontRoundedIcon,
  ExitToAppRoundedIcon
} from '../../utils/icons';

import './Header.scss';
import { useAuth } from '../../context/auth';

interface HeaderProps {
  photoUrl?: string | null;
  username?: string | null;
}

export default function Header({ photoUrl, username }: HeaderProps): React.ReactElement {
  const { currentUser } = useAuth();

  return (
    <div className='header'>
      <div className='headerLeft'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png'
          alt='fb logo'
          className='logo'
        />
        <div className='searchInput'>
          <SearchIcon className='searchIcon' />
          <input type='text' placeholder='Search' className='inputBar' />
        </div>
      </div>

      <div className='headerCenter'>
        <div className='activeOption'>
          <HomeRoundedIcon fontSize='large' className='icon' />
        </div>
        <div className='option'>
          <SubscriptionsRoundedIcon fontSize='large' className='icon' />
        </div>
        <div className='option'>
          <StorefrontRoundedIcon fontSize='large' className='icon' />
        </div>
        <div className='option'>
          <SupervisedUserCircleRoundedIcon fontSize='large' className='icon' />
        </div>
      </div>

      <div className='headerRight'>
        <div className='info'>
          <Avatar src={photoUrl} />
          <h4>{username}</h4>
        </div>
        <IconButton>
          <AddRoundedIcon />
        </IconButton>
        <IconButton>
          <NotificationsRoundedIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}
