import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

import './Login.scss';
import { useAuth } from '../../context/auth';
import { ROUTES } from '../../utils/constants';
import fbNameLogo from '../../assets/fbNameLogo.png';

function Login(): React.ReactElement {
  const { signin } = useAuth();
  const history = useHistory();

  const onSignIn = async () => {
    try {
      await signin();
      history.push(ROUTES.HOME);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='login'>
      <div className='logo'>
        <img src={fbNameLogo} alt='name logo' />
        <h3>Facebook clone made using Typescript and React.</h3>
      </div>
      <div className='loginCard'>
        <div className='card'>
          <span className='title'>Sign In</span>
          <p>Sign in with your Google account</p>
          <Button className='button' type='submit' onClick={onSignIn}>
            SIGN IN
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
