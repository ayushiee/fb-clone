import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

import './Header.scss';

export default function Header(): React.ReactElement {
  return (
    <div className='header'>
      <div className='headerLeft'>
        <img src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' alt='' className='logo' />
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
