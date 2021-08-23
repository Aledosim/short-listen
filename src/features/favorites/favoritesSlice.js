import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    trackAdded: (state, action) => {
      state.value.push(action.payload)
    },
    trackRemoved: (state, action) => {
      state.value = state.value.filter(item => item !== action.payload)
    },
  },
})

export const { trackAdded, trackRemoved } = favoritesSlice.actions

export const selectFavorites = (state) => state.favorites.value

export default favoritesSlice.reducer
