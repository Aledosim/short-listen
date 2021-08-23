import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../../app/store'
import Favorites from '../Favorites'
import * as favoritesFixture from '../__fixtures__/favoritesFixture.json'
import * as reactreduxModule from 'react-redux'

function testRender() {
    return render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    )
}

jest.mock("../../trackcard/TrackCard", () => {

  function DummyComponent(props) {

    const componentProps = Object.keys(props).map(value => {
      return(
        <div
          key={value}
          data-testid={value}
        >
          {props[value]}
        </div>
      )
    })

    return(
      <div role="listitem">
        {componentProps}
      </div>
    )
  }

  return {
    __esModule: true,
    default: DummyComponent
  }
})

describe('<Favorites /> tests', () => {

  it('renders without crashing', async () => {
    const tree = testRender()

    expect(tree).toMatchSnapshot()
  })

  it('should contain a list of tracks', async () => {
    jest.spyOn(reactreduxModule, 'useSelector')
      .mockImplementation(() => favoritesFixture.default)

    testRender()

    expect(screen.getByRole("list"))
    expect(screen.getAllByRole("listitem"))
  })

})

