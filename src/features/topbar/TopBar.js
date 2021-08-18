import React, { useContext } from 'react'

export function search(setCurrency) {
  const searchInner = (event) => {
    const searchField  = document.getElementById('searchField')
    const text = searchField.value.toLowerCase()

    if (Object.keys(configs.currencies).includes(text)) {
      setCurrency(text)
      searchField.value = ''
    } else {
      searchField.value = ''
      searchField.placeholder = 'Termo inválido'
    }
    event.preventDefault()
  }

  return searchInner
}

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
