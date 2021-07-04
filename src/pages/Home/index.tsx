import React from 'react';
import { Header, SideBar, Feed, Widget } from '../../components';
import { useAuth } from '../../context/auth';

import './Home.scss';

function Home(): React.ReactElement {
  const { currentUser } = useAuth();
  const photo = currentUser?.photoURL ?? undefined;
  const user = currentUser?.displayName ?? null;

  return (
    <>
      <Header photoUrl={photo} username={user} />
      <div className='homeBody'>
        <SideBar photoUrl={photo} username={user} />
        <Feed photoUrl={photo} username={user}/>
        <Widget />
      </div>
    </>
  );
}

export default Home;
