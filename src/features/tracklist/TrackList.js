import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector, useDispatch } from 'react-redux'

import { refresh } from './trackListSlice'
import TrackCard from '../trackcard/TrackCard'

export default function TrackList(){

  const trackList = useSelector((state) => state.trackList.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refresh())
  }, [])

  return(
    <div role="list">
      <InfiniteScroll
      dataLength={10} //This is important field to render the next data
      next="fetchData"
      hasMore={false}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
        </p>
      }
      >
      {
        trackList.map( (track) =>
          <TrackCard
            cover={track.cover}
            title={track.title}
            singer={track.singer}
            time={track.time}
            preview={track.preview}
            link={track.link}
            key={track.id}
            id={track.id}
          />
        )
      }
      </InfiniteScroll>
    </div>
  );
};

