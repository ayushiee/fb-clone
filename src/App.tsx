import React from 'react';

import { Login, Home } from './pages';
import './App.scss';

function App(): React.ReactElement {
  const user = null;
  return (
    <div className='App'>
      <Login />
      {/* <Home /> */}
     </div>
  );
}

export default App;
