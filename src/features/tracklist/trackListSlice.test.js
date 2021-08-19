import trackListReducer, {
  refresh,
} from './trackListSlice';

import * as trackListFixture from '../../fixtures/trackListFixture.json'

describe('refresh from trackList reducer', () => {
  const initialState = {
    value: [],
  };
  it.only('should handle initial state', () => {
    expect(trackListReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
    });
  });

  it.only('should handle refresh', () => {
    const actual = trackListReducer(initialState, refresh());

    const expected = {
      value: trackListFixture.default
    }

    expect(actual).toEqual(expected)

  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
