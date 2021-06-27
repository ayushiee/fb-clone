import React from 'react';
import { Feed, Header, SideBar } from './components';
import './App.scss';

function App(): React.ReactElement {
  return (
    <div className='App'>
      <Header />
      <div className='appBody'>
        <SideBar />
        <Feed />
        {/*
         - feed
         - widgets */}
      </div>
    </div>
  );
}

export default App;
