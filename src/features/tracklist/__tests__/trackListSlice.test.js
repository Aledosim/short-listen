import trackListReducer, {
  trackChartEnded,
  fetchTrackChart,
} from '../trackListSlice';

import * as trackListFixture from '../__fixtures__/trackListFixture.json'
import chartFixture from '../../../__fixtures__/chartFixture'

const initialState = {
  value: [],
  status: 'idle',  // idle, loading, suceeded, failed
  error: null,
}

describe('trackList reducer', () => {
  it('should handle initial state', () => {
    expect(trackListReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
      status: 'idle',
      error: null,
    })
  })
})

describe('fetchTrackChart', () => {
  it('should return a array of tracks', async () => {
    const actual = await fetchTrackChart()
    const expected = chartFixture.tracks

    expect(actual).toEqual(expected)
  })
})

describe('trackChartEnded async actions', () => {
  it('should handle pending', () => {
    const actual = trackListReducer(initialState, trackChartEnded.pending())
    const expected = {
      value: [],
      status: 'loading',
      error: null,
    }

    expect(actual).toEqual(expected)
  })

  it('should handle fulfilled', async () => {
    const payload = await fetchTrackChart()

    const actual = trackListReducer(initialState, trackChartEnded.fulfilled(payload))
    const expected = {
      value: trackListFixture.default,
      status: 'suceeded',
      error: null,
    }

    expect(actual).toEqual(expected)
  })
})
