import React from 'react';
import { createGlobalStyle } from 'styled-components';

import TopBar from '../features/topbar/TopBar'
import TrackList from '../features/tracklist/TrackList'

// colors
const background = "#0A0A0A"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${background};
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <TopBar />
      </header>
      <div>
        <TrackList />
      </div>
    </>
  );
}

export default App;
