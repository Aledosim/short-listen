import React from 'react'
import { render, screen } from '@testing-library/react'

import TrackCard, {songTime} from './TrackCard'

function testRender() {
    return render(
      <TrackCard
        cover="https://api.deezer.com/album/234349272/image"
        title="Meu Pedaço de Pecado"
        singer="João Gomes"
        time={157}
        preview="https://cdns-preview-7.dzcdn.net/stream/c-70255a40b7c438c3239e94ba0c909128-3.mp3"
        link="https://www.deezer.com/track/1391349252"
        id={1391349252}
      />
    )
}

describe('songTime tests', () => {

  test.each`
  time   | expected
  ${157} | ${"2:37"}
  ${60}  | ${"1:00"}
  ${1}   | ${"0:01"}
  ${600} | ${"10:00"}
  ${757} | ${"12:37"}
  ${6000}| ${"100:00"}
  `('returns $expected when $time is passed', ({time, expected}) => {
    expect(songTime(time)).toBe(expected)
  })
})

describe('<TrackCard /> tests', () => {

  it('renders without crashing', () => {
    const tree = testRender()

    expect(tree).toMatchSnapshot()
  })

  it('should show album cover, song title, singer and duration', () => {

    testRender()

    expect(screen.getByAltText(/cover/i).src).toBe("https://api.deezer.com/album/234349272/image")
    expect(screen.getByText(/Meu Pedaço de Pecado/))
    expect(screen.getByText(/João Gomes/))
    expect(screen.getByText(/2:37/))
  })

  it('should contain preview, info link and favorite buttons', () => {

    testRender()

    const buttons = screen.getAllByRole("button")
    expect(buttons.map((button) => button.getAttribute("name")))
      .toEqual(expect.arrayContaining(
        [
          "play/pause",
          "more info",
          "favorite"
        ]
      ))
    expect(buttons.length).toEqual(3)
  })

})

