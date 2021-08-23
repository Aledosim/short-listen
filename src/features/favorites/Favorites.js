import React from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux'

import { selectFavorites } from './favoritesSlice'

import TrackCard from '../trackcard/TrackCard'

// colors
const text = "#EBEBEB"

const StyledInfiniteScroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${text};
`

export default function Favorites(){

  const favorites = useSelector(selectFavorites)

  return(
    <>
      <header>
        <button name='favorites' />
      </header>
      <div role="list">
        <StyledInfiniteScroll
          hasMore={false}
          dataLength={favorites.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
            </p>
          }
          >
          {
            favorites.map( (track, i) => {
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
    </>
  );
};
