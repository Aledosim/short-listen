import React from 'react'
import { render, screen, wait } from '@testing-library/react'
import { Provider } from 'react-redux'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

import chartFixture from '../../../__fixtures__/chartFixture'
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

const axiosMock = new MockAdapter(axios)
const data = chartFixture

describe('<TrackList /> tests', () => {

  beforeEach(() => {
    axiosMock.reset()
    axiosMock.onGet('chart').reply(200, data);
  })

  it('renders without crashing', async () => {
    const tree = testRender()

    await wait(() => {
      expect(axiosMock.history.get.length).toBe(1)
    })

    expect(tree).toMatchSnapshot()
  })

  it('should contain a list of tracks', async () => {

    testRender()

    await wait(() => {
      expect(axiosMock.history.get.length).toBe(1)
    })

    expect(screen.getByRole("list"))
    const items = screen.getAllByRole("listitem")
    expect(items.length).toEqual(10)  // there are 10 values on chartFixture.json
  })

})

