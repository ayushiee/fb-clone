import React from 'react';
import { Header, SideBar, Feed, Widget } from '../../components';

import './Home.scss';

function Home(): React.ReactElement {
  return (
    <>
      <Header />
      <div className='homeBody'>
        <SideBar />
        <Feed />
        <Widget />
      </div>
    </>
  );
}

export default Home;
