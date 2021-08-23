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
    }
  },
})

export const { trackAdded } = favoritesSlice.actions

export const selectFavorites = (state) => state.favorites.value

export default favoritesSlice.reducer
