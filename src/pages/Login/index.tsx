import React from 'react';
import { Button } from '@material-ui/core';

import './Login.scss';
import { auth, provider } from '../../utils/firebase';

function Login(): React.ReactElement {
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then(result => console.log(result.user))
      .catch(error => console.log(error.message));
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
