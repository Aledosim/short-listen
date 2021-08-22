import trackListReducer, {
  trackChartEnded,
  fetchTracksChartThunk,
  searchedTracksEnded,
  fetchTermThunk,
  searchedTerm,
} from '../trackListSlice';

import { store } from '../../../app/store'
import * as trackListFixture from '../__fixtures__/trackListFixture.json'
import * as searchTermFixture from '../__fixtures__/searchTermFixture.json'
import chartFixture from '../../../__fixtures__/chartFixture'
import searchFixture from '../../../__fixtures__/searchFixture.json'

const initialState = {
  value: [],
  status: 'idle',  // idle, loading, suceeded, failed
  error: null,
  searchTerm: '',
  isSearch: false,
}

// state after searchedTerm action
const searchInitalState = {
  value: [],
  status: 'idle',
  error: null,
  searchterm: 'eminem',
  issearch: true,
}

describe('trackList reducer', () => {
  it('should handle initial state', () => {
    expect(trackListReducer(undefined, { type: 'unknown' })).toEqual(initialState)

  })
})

describe('fetchTracksChartThunk', () => {
  it('should return a array of tracks', async () => {
    const actual = await fetchTracksChartThunk()
    const expected = chartFixture.tracks.data

    expect(actual).toEqual(expected)
  })
})

describe('trackChartEnded async actions', () => {
  it('should handle pending', () => {
    const actual = trackListReducer(initialState, trackChartEnded.pending())
    const expected = {
      ...initialState,
      status: 'loading',
    }

    expect(actual).toEqual(expected)
  })

  it('should handle fulfilled', async () => {
    const payload = await fetchTracksChartThunk()

    const actual = trackListReducer(initialState, trackChartEnded.fulfilled(payload))
    const expected = {
      ...initialState,
      value: trackListFixture.default,
      status: 'suceeded',
    }

    expect(actual).toEqual(expected)
  })

  it('should handle various fulfilled', async () => {
    const payload = await fetchTracksChartThunk()

    const firstState = trackListReducer(initialState, trackChartEnded.fulfilled(payload))

    const actual = trackListReducer(firstState, trackChartEnded.fulfilled(payload))

    const expected = {
      ...initialState,
      value: trackListFixture.default.concat(trackListFixture.default),
      status: 'suceeded',
    }

    expect(actual).toEqual(expected)
  })
})

describe('searchedTerm reducer', () => {
  it('should set isSearch and searchTerm', () => {
    const actual = trackListReducer(initialState, searchedTerm('test term'))
    const expected = {
      ...initialState,
      searchTerm: 'test term',
      isSearch: true,
    }

    expect(actual).toEqual(expected)
  })
})

describe('fetchTermThunk', () => {
  it('should return a array of tracks', async () => {
    const actual = await fetchTermThunk({index: 0, limit: 10}, store)
    const expected = searchFixture.data

    expect(actual).toEqual(expected)
  })
})

describe('searchedTracksEnded async actions', () => {
  it('should handle pending', () => {
    const actual = trackListReducer(searchInitalState, searchedTracksEnded.pending())

    const expected = {
      ...searchInitalState,
      status: 'loading',
    }

    expect(actual).toEqual(expected)
  })

  it('should handle fulfilled', async () => {
    const payload = await fetchTermThunk({index: 0, limit: 10}, store)

    const actual = trackListReducer(searchInitalState, searchedTracksEnded.fulfilled(payload))
    const expected = {
      ...searchInitalState,
      status: 'suceeded',
      value: searchTermFixture.default,
    }

    expect(actual).toEqual(expected)
  })

  it('should handle various fulfilled', async () => {
    const payload = await fetchTermThunk({index: 0, limit: 10}, store)

    const firstState = trackListReducer(searchInitalState, searchedTracksEnded.fulfilled(payload))

    const actual = trackListReducer(firstState, searchedTracksEnded.fulfilled(payload))

    const expected = {
      ...searchInitalState,
      value: searchTermFixture.default.concat(searchTermFixture.default),
      status: 'suceeded',
    }

    expect(actual).toEqual(expected)
  })
})

