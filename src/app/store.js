import { configureStore } from '@reduxjs/toolkit';

import trackListReducer from '../features/tracklist/trackListSlice'

export const store = configureStore({
  reducer: {
    trackList: trackListReducer,
  },
});
