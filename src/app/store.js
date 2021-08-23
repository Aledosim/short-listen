import { configureStore } from '@reduxjs/toolkit';

import trackListReducer from '../features/tracklist/trackListSlice'
import favoritesReducer from '../features/favorites/favoritesSlice'

export const store = configureStore({
  reducer: {
    trackList: trackListReducer,
    favorites: favoritesReducer,
  },
});
