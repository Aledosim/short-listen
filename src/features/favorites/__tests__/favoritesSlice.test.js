import favoritesReducer, { trackAdded } from '../favoritesSlice';
import * as favoritesFixture from '../__fixtures__/favoritesFixture.json'

const initialState = {
  value: [],
}

describe('favorites reducer', () => {
  it('should handle initial state', () => {
    expect(favoritesReducer(undefined, { type: 'unknown' })).toEqual(initialState)

  })
})

describe('trackAdded', () => {
  it('should add a new track', () => {
    const payload = favoritesFixture.default[0]
    const actual = favoritesReducer(initialState, trackAdded(payload))
    const expected = {
      ...initialState,
      value: [payload],
    }

    expect(actual).toEqual(expected)
  })
})
