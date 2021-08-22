import React, { useEffect } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector, useDispatch } from 'react-redux'

import {
  trackChartEnded,
  selectTrackList,
  selectIsSearch,
  searchedTracksEnded,
} from './trackListSlice'

import TrackCard from '../trackcard/TrackCard'

// colors
const text = "#EBEBEB"

const StyledInfiniteScroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${text};
`

export default function TrackList(){

  const trackList = useSelector(selectTrackList)
  const isSearch = useSelector(selectIsSearch)
  const dispatch = useDispatch()

  const pageSize = 30

  useEffect(() => {
    if (isSearch){
      dispatch(searchedTracksEnded({index: 0, limit: pageSize}))
    } else {
      dispatch(trackChartEnded({index: 0, limit: pageSize}))
    }
  }, [isSearch, dispatch])

  function fetchMoreData(){
    console.log("fetchMoreData")
    if (isSearch){
      dispatch(searchedTracksEnded({index: trackList.length, limit: pageSize}))
    } else {
      dispatch(trackChartEnded({index: trackList.length, limit: pageSize}))
    }
  }

  return(
    <div role="list">
      <StyledInfiniteScroll
      dataLength={trackList.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
        </p>
      }
      >
      {
        trackList.map( (track, i) => {
          return(
              <TrackCard
                cover={track.cover}
                title={track.title}
                singer={track.singer}
                time={track.time}
                preview={track.preview}
                link={track.link}
                id={track.id}
                key={i}
              />
          )
        })
      }
      </StyledInfiniteScroll>
    </div>
  );
};

