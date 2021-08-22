import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchTracksChart, fetchTerm } from '../../utils/apiclient'

const initialState = {
  value: [],
  status: 'idle',  // idle, loading, suceeded, failed
  error: null,
  searchTerm: '',
  isSearch: false,
}

export async function fetchTracksChartThunk({index, limit} = {index: undefined, limit: undefined}) {

  const tracksChart = await fetchTracksChart({index: index, limit: limit})

  return tracksChart.data.tracks.data
}

export const trackChartEnded = createAsyncThunk(
  'trackList/trackChartEnded',
  fetchTracksChartThunk,
  {
    condition: (arg, { getState }) => {
      const { trackList } = getState()
      const fetchStatus = trackList.status
      if (fetchStatus === 'loading'){
        return false
      }
    }
  }
)

export async function fetchTermThunk({index, limit} = {index: undefined, limit: undefined}, thunkAPI) {
  const term = thunkAPI.getState().trackList.searchTerm
  const searchResult = await fetchTerm(term, {index, limit})

  return searchResult.data.data
}

export const searchedTracksEnded = createAsyncThunk(
  'trackList/searchedTracksEnded',
  fetchTermThunk,
  {
    condition: (arg, { getState }) => {
      const { trackList } = getState()
      const fetchStatus = trackList.status
      if (fetchStatus === 'loading'){
        return false
      }
    }
  }
)

export const trackListSlice = createSlice({
  name: 'trackList',
  initialState,
  reducers: {
    searchedTerm: (state, action) => {
      state.value = []
      state.searchTerm = action.payload
      state.isSearch = true
    },
  },
  extraReducers: {
    [trackChartEnded.pending]: (state) => {state.status = 'loading'},
    [trackChartEnded.fulfilled]: (state, action) => {

      const newTracks = action.payload.map( track => {
        return {
          cover: track.album.cover,
          id: track.id,
          link: track.link,
          preview: track.preview,
          singer: track.artist.name,
          time: track.duration,
          title: track.title
        }
      })

      state.status = 'suceeded'
      state.value = state.value.concat(newTracks)
    },
    [searchedTracksEnded.pending]: (state) => {
      state.status = 'loading'
    },
    [searchedTracksEnded.fulfilled]: (state, action) => {

      const newTracks = action.payload.map( track => {
        return {
          cover: track.album.cover,
          id: Number(track.id),
          link: track.link,
          preview: track.preview,
          singer: track.artist.name,
          time: Number(track.duration),
          title: track.title
        }
      })

      state.value = state.value.concat(newTracks)
      state.status = 'suceeded'
    },
  },
})

export const { searchedTerm } = trackListSlice.actions

export const selectTrackList = (state) => state.trackList.value
export const selectIsSearch = (state) => state.trackList.isSearch

export default trackListSlice.reducer
