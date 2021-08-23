import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'trackList',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changedToFavorites: (state) => {state.value = 'favorites'},
    changedToTrackList: (state) => {state.value = 'trackList'},
  },
})

export const { changedToFavorites, changedToTrackList } = appSlice.actions

export const selectView = (state) => state.app.value

export default appSlice.reducer
