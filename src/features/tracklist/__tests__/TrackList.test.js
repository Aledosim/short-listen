import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../../app/store'
import TrackList from '../TrackList'

function testRender() {
    return render(
      <Provider store={store}>
        <TrackList />
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

describe('<TrackList /> tests', () => {

  it('renders without crashing', async () => {
    const tree = testRender()

    expect(tree).toMatchSnapshot()
  })

  it('should contain a list of tracks', () => {

    testRender()

    expect(screen.getByRole("list"))
    const items = screen.getAllByRole("listitem")
    expect(items.length).toEqual(10)  // there are 10 values on chartFixture.json
  })

})

