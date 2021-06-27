import React from 'react';
import { Header, SideBar } from './components';

function App(): React.ReactElement {
  return (
    <div className='App'>
      <Header />
      <div className='appBody'>
        <SideBar />
        {/* - side bar
         - feed
         - widgets */}
      </div>
    </div>
  );
}

export default App;
