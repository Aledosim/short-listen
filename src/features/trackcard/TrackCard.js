import React from 'react'
import styled from 'styled-components'

import playIcon from './images/play/play.png'

export function songTime(totalTime) {
  const min = Math.floor(totalTime / 60)
  const sec = totalTime % 60

  return `${min}:${String(sec).padStart(2, "0")}`
}

// color definitions
const background = "#14213D"
const text = "#E5E5E5"
const buttonColor = "#2D4B8B"

// styles
const Container = styled.div`
  width: 30rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: stretch;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;

  background-color: ${background};
`

const Img = styled.img`

`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 1rem;
  padding-right: 1rem;

  color: ${text};
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Button = styled.button`
  height: 100px;
  width: 100px;
  padding-right: 10px;

  background-color: ${buttonColor};
  background-repeat: no-repeat;
  background-position: center;

  border-style: solid;
  border-width: 1px;
  border-color: black;
`

const PlayPauseButton = styled(Button)`
  background-image: url(${props => props.icon});
`

export default function TrackCard(props){

  return(
    <Container role="listitem">
      <Img alt="Album cover" src={props.cover} />
      <Info>
        <div>{props.title}</div>
        <div>{props.singer}</div>
        <div>{songTime(props.time)}</div>
      </Info>
      <ButtonContainer>
        <PlayPauseButton name='play/pause' icon={playIcon}/>
        <Button name='more info' />
        <Button name='favorite' />
      </ButtonContainer>
    </Container>
  );
};

