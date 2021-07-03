import React from 'react';
import { Header, SideBar, Feed, Widget } from '../../components';
import { useAuth } from '../../context/auth';

import './Home.scss';

function Home(): React.ReactElement {
  const { currentUser } = useAuth();

  return (
    <>
      <Header photoUrl={currentUser?.photoURL} username={currentUser?.displayName} />
      <div className='homeBody'>
        <SideBar />
        <Feed />
        <Widget />
      </div>
    </>
  );
}

export default Home;
