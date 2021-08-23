import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'trackList',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changedToFavorites: (state) => {
      console.log('mudando para favoritos')
      state.value = 'favorites'},
  },
})

export const { changedToFavorites } = appSlice.actions

export const selectView = (state) => state.app.value

export default appSlice.reducer
