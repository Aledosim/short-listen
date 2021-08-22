import { configureStore } from '@reduxjs/toolkit';

import trackListReducer from '../features/tracklist/trackListSlice'
import searchTermReducer from '../features/topbar/searchSlice'

export const store = configureStore({
  reducer: {
    trackList: trackListReducer,
    searchTerm: searchTermReducer,
  },
});
