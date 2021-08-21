import React, { useContext } from 'react'

export default function TopBar(){

  return(
    <header data-cy='topbar'>
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
