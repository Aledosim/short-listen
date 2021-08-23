import React from 'react'
import styled from 'styled-components'
import style from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'

import { selectFavorites } from './favoritesSlice'
import { selectTrackList } from '../tracklist/trackListSlice'
import TrackCard from '../trackcard/TrackCard'
import { changedToTrackList } from '../../app/appSlice'

import chartIcon from './chart.png'

// colors
const text = "#EBEBEB"

const StyledInfiniteScroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${text};
`

const Header = style.header`
  display: flex;
  justify-content: flex-end;

  height: 2.5rem;
  width: 100%;
  z-index: 1;

  position: fixed;
`
const Button = style.button`
  height: 3rem;
  width: 4rem;

  margin-top: 1rem;
  margin-right: 0.5rem;

	background-color: #0A0A0A;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${chartIcon});

	border: none;
`

export default function Favorites(){

  const favorites = useSelector(selectFavorites)
  const trackList = useSelector(selectTrackList)
  const dispatch = useDispatch()

  return(
    <>
      <Header>
        <Button
          name='track list'
          onClick={() => dispatch(changedToTrackList())}
        />
      </Header>
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
            favorites.map( (trackId, i) => {
              const track = trackList.find((track) => track.id === trackId)
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

