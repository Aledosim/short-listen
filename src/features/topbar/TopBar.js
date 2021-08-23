import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import style from 'styled-components'

import { ReactComponent as Logo } from './images/deezer_logo.svg'
import searchIcon from './images/search_icon.svg'

import { searchedTerm } from '../tracklist/trackListSlice'
import { changedToFavorites } from '../../app/appSlice'

const Container = style.header`
  display: inline-flex;
  align-items: center;

  width: 100%;
  max-height: 50px;
  padding-top: 0.75rem;
  padding-bottom: 0.5rem;
`

const StyledLogo = styled(Logo)`
  margin-left: 2.5rem;
  max-width: 100px;
  height: auto;
`

const Form = style.form`
  position: relative;

  margin: auto;

  width: 30rem;
  height: 2rem;

  display: flex;
  align-items: center;
`

const Input = style.input.attrs(() => {})`
  & {
    width: 100%;
    height: 80%;
    padding-right: 4rem;
    padding-left: 2rem;

    background-color: #F4F1F1;
    border: none;
    border-radius: 4px;
  }

  &::placeholder {
    color: #000000, 46%;
  }
`

const Button = style.button`
  position: relative;
  transform: translateX(-100%);
  right: 9px;

  height: 70%;
  width: 3rem;
  border: none;

  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-color: #F4F1F1;
  color: #9B9B9B;
`

export function search(dispatch) {
  const innerSearch = (event) => {
    const searchField  = document.getElementById('searchField')
    const text = searchField.value.toLowerCase()

    dispatch(searchedTerm(text))

    event.preventDefault()
  }
  return innerSearch
}

export default function TopBar(){
  const dispatch = useDispatch()

  return(
    <Container data-cy='topbar'>
      <StyledLogo />
      <Form
        onSubmit={() => {}}
      >
        <Input
          type='search'
          autoComplete='on'
          autoSave='true'
          placeholder='Album, artist or track title'
          id='searchField'
          data-cy='searchField'
        />
        <Button
          type='submit'
          onClick={search(dispatch)}
          data-cy='searchButton'
        />
      </Form>
      <button name='favorites'
        type='button'
        onClick={() => {dispatch(changedToFavorites())}}
      />
    </Container>
  );
};
