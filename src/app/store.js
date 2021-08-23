import { configureStore } from '@reduxjs/toolkit';

import trackListReducer from '../features/tracklist/trackListSlice'
import favoritesReducer from '../features/favorites/favoritesSlice'
import appReducer from './appSlice'

export const store = configureStore({
  reducer: {
    trackList: trackListReducer,
    favorites: favoritesReducer,
    app: appReducer,
  },
});
