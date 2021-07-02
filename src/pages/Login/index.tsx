import React from 'react';
import { Button, CardContent, Card } from '@material-ui/core';

import './Login.scss';

function Login(): React.ReactElement {
  const login = () => {
    console.log('logged in');
  };
  return (
    <div className='login'>
      <div className='logo'>
        <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='name logo' />
        <h3>Facebook clone made using Typescript and React.</h3>
      </div>
      <div className='loginCard'>
        <div className='card'>
          <span className='title'>Sign In</span>
          <p>Sign in with your Google account</p>
          <Button className='button' type='submit' onClick={login}>
            SIGN IN
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
