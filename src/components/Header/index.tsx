import React from 'react';

import './Header.scss';

export default function Header(): React.ReactElement {
  return (
    <div className='Header'>
      <div className='header-left'>
        <img src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' alt='' className='logo' />
        <div className='search-bar'>search</div>
      </div>
      <div className='header-center'>center</div>
      <div className='header-right'>right</div>
    </div>
  );
}
