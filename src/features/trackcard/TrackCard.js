import React from 'react'

export function songTime(totalTime) {
  const min = Math.floor(totalTime / 60)
  const sec = totalTime % 60

  return `${min}:${String(sec).padStart(2, "0")}`
}

export default function TrackCard(props){

  return(
    <div role="listitem">
      <img alt="Album cover" src={props.cover} />
      {props.title}
      {props.singer}
      {songTime(props.time)}
      <button name='play/pause' />
      <button name='more info' />
      <button name='favorite' />
    </div>
  );
};

