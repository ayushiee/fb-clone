import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';

import {
  SearchIcon,
  HomeRoundedIcon,
  FlagRoundedIcon,
  SubscriptionsRoundedIcon,
  SupervisedUserCircleRoundedIcon,
  AddRoundedIcon,
  ArrowDropDownRoundedIcon,
  NotificationsRoundedIcon,
  StorefrontRoundedIcon
} from '../../utils/icons';

import './Header.scss';

export default function Header(): React.ReactElement {
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
        {/* <div className='option'>
          <FlagRoundedIcon fontSize='large' />
        </div> */}
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
          <Avatar />
          <h4>User name</h4>
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
