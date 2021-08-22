import React from 'react';
import style, { createGlobalStyle } from 'styled-components';

import TopBar from '../features/topbar/TopBar'
import TrackList from '../features/tracklist/TrackList'

// colors
const background = "#0A0A0A"

const GlobalStyle = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	}

  body {
    background-color: ${background};
  }

	@media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
	}

	@media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
	}

  button {
    cursor: pointer;
  }
`

const Header = style.header`
  position: fixed;
  width: 100%;
  z-index: 1;

  background-color: ${background};
`

const TrackListContainer = style.div`
  position: relative;
  top: 4.5rem;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <TopBar />
      </Header>
      <TrackListContainer>
        <TrackList />
      </TrackListContainer>
    </>
  );
}

export default App;
