import React from 'react'
import styled from 'styled-components'

import playIcon from './images/play/play.png'
import infoIcon from './images/info/info.png'
import favIcon from './images/favorite/favorite.png'

export function songTime(totalTime) {
  const min = Math.floor(totalTime / 60)
  const sec = totalTime % 60

  return `${min}:${String(sec).padStart(2, "0")}`
}

// color definitions
const background = "#57287B"
const text = "#E5E5E5"
const buttonColor = "#8D46C3"
const margin = "#FFFFA7"
const border = "#ADADAD"

const Container = styled.div`
  width: 35rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;

  border-radius: 18px;

  box-shadow: 1px 1px 5px 1px ${margin};

  background-color: ${background};
`

const Img = styled.img`
  border-radius: 5px;
  border-width: 0.5px;
  border-color: ${border};
  border-style: solid;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 1rem;
  padding-right: 1rem;

  color: ${text};
  line-height: 2rem;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Button = styled.button`
  height: 3.4rem;
  width: 4.7rem;
  padding-right: 10px;

  background-color: ${buttonColor};
  background-repeat: no-repeat;
  background-position: center;

  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${border};
`

const PlayPauseButton = styled(Button)`
  background-image: url(${props => props.icon});
`

const InfoButton = styled(Button)`
  background-image: url(${infoIcon});
`

const FavButton = styled(Button)`
  background-image: url(${favIcon});
`

export default function TrackCard(props){

  return(
    <Container role="listitem">
      <Img alt="Album cover" src={props.cover} />
      <Info>
        <div>{props.title}</div>
        <div data-cy="artistName">{props.singer}</div>
        <div>{songTime(props.time)}</div>
      </Info>
      <ButtonContainer>
        <PlayPauseButton name='play/pause' icon={playIcon}/>
        <InfoButton name='more info' />
        <FavButton name='favorite' />
      </ButtonContainer>
    </Container>
  );
};

