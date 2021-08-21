import React from 'react'

import { ReactComponent as Logo } from './deezer_logo.svg'

export default function TopBar(){

  return(
    <header data-cy='topbar'>
      <Logo />
      <form
        onSubmit={() => {}}
      >
      <input
        type='search'
        autoComplete='on'
        autoSave='true'
        placeholder='Album, artist or title'
        id='searchField'
        data-cy='searchField'
      />
      <button
        type='submit'
        data-cy='searchButton'
      />
      </form>
    </header>
  );
};
