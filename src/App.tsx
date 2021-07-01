import React from 'react';
import { Feed, Header, SideBar, Widget } from './components';
import './App.scss';

function App(): React.ReactElement {
  return (
    <div className='App'>
      <Header />
      <div className='appBody'>
        <SideBar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
