import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../../app/store'
import TopBar, { search } from '../TopBar'
import * as TopBarModule from '../TopBar'
import * as trackListSlice from '../../tracklist/trackListSlice'

function testRender() {
    return render(
      <Provider store={store}>
        <TopBar />
      </Provider>
    )
}

describe('search tests', () => {

  it('returns a function', () => {
    const func = search(jest.fn())

    expect(typeof func).toEqual('function')
  })

  it('gets the correct input', () => {
    const event = { preventDefault: () => {} }

    document.getElementById = jest.fn(() => HTMLInputElement)
    HTMLInputElement.value = ''

    const func = search(() => {})
    func(event)

    expect(document.getElementById).toHaveBeenCalledWith('searchField')
  })

  it('search for lowercase', () => {
    const event = { preventDefault: () => {} }

    const dispatchMock = jest.fn()

    HTMLInputElement.value = 'SomE CrAzY TeXT'
    document.getElementById = () => HTMLInputElement

    const termSearchedMock = jest.spyOn(trackListSlice, 'searchedTerm')

    const func = search(dispatchMock)
    func(event)

    expect(termSearchedMock).toHaveBeenCalledWith('some crazy text')
    expect(dispatchMock).toHaveBeenCalled()
  })

  it('calls event.disableDefault method to prevent page reload', () => {
    const mockPreventDefault = jest.fn()
    const event = { preventDefault: mockPreventDefault }

    HTMLInputElement.value = ''
    document.getElementById = () => HTMLInputElement

    const func = search(() => {})
    func(event)

    expect(mockPreventDefault).toHaveBeenCalled()
  });
})

describe('<TopBar /> tests', () => {

  it('renders without crashing', async () => {
    const tree = testRender()

    expect(tree).toMatchSnapshot()
  })

  it('call search when search button is clicked', async () => {
    fail("I could not mock this function in time")
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
