import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import TopBar, { search } from './TopBar'
import * as TopBarModule from './TopBar'
import * as searchSlice from './searchSlice'

function testRender() {
    return render(
      <TopBar />
    )
}

describe('search tests', () => {

  it('gets the correct input', () => {
    const event = { preventDefault: () => {} }

    document.getElementById = jest.fn(() => HTMLInputElement)
    HTMLInputElement.value = ''

    search(event)

    expect(document.getElementById).toHaveBeenCalledWith('searchField')
  })

  it('search for lowercase only', () => {
    const event = { preventDefault: () => {} }

    HTMLInputElement.value = 'SomE CrAzY TeXT'
    document.getElementById = () => HTMLInputElement

    const termSearchedMock = jest.spyOn(searchSlice, 'termSearched')

    search(event)

    expect(termSearchedMock).toHaveBeenCalledWith('some crazy text')

  })

  it('calls event.disableDefault method to prevent page reload', () => {
    const mockPreventDefault = jest.fn()
    const event = { preventDefault: mockPreventDefault }

    HTMLInputElement.value = ''
    document.getElementById = () => HTMLInputElement

    search(event)

    expect(mockPreventDefault).toHaveBeenCalled()
  });
})

describe('<TopBar /> tests', () => {

  it('renders without crashing', async () => {
    const tree = testRender()

    expect(tree).toMatchSnapshot()
  })

  it.skip('call search when search button is clicked', async () => {
    const mockSearch = jest.spyOn(TopBarModule, 'search')

    testRender()

    // The click event flow for forms is not implemented on jsdom
    // https://github.com/jsdom/jsdom/issues/1937
    // fireEvent.submit(screen.getByRole('button'))

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockSearch).toHaveBeenCalled()
  })
})
