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

    // there are 10 entries on chartFixture.json
    expect(screen.getAllByTestId("cover").length).toEqual(10)
    expect(screen.getAllByTestId("title").length).toEqual(10)
    expect(screen.getAllByTestId("singer").length).toEqual(10)
    expect(screen.getAllByTestId("time").length).toEqual(10)
    expect(screen.getAllByTestId("preview").length).toEqual(10)
    expect(screen.getAllByTestId("link").length).toEqual(10)
    expect(screen.getAllByTestId("id").length).toEqual(10)
  })

})

