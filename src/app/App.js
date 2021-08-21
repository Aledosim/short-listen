import React from 'react';

import logo from './Deezer_Logo_RVB_MonoBlack.svg'
import TopBar from '../features/topbar/TopBar'
import TrackList from '../features/tracklist/TrackList'

function App() {
  return (
    <>
      <header>
        <img src={logo} />
        <TopBar />
      </header>
      <div>
        <TrackList />
      </div>
    </>
  );
}

export default App;
