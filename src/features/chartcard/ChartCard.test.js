import React from 'react'
import { render, screen } from '@testing-library/react'

import ChartCard, {songTime} from './ChartCard'

function testRender() {
    return render(
      <ChartCard />
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

describe('<ChartCard /> tests', () => {

  it('renders without crashing', async () => {
    const tree = testRender()

    expect(tree).toMatchSnapshot()
  })

  it('accepts and exibits album cover, song title, singer and duration', () => {

    render(
      <ChartCard
        cover="https://api.deezer.com/album/234349272/image"
        title="Meu Pedaço de Pecado"
        singer="João Gomes"
        time={157}
        fullSong="https://www.deezer.com/track/1391349252"
        preview="https://cdns-preview-7.dzcdn.net/stream/c-70255a40b7c438c3239e94ba0c909128-3.mp3"
      />
    )

    expect(screen.getByAltText(/cover/i).src).toBe("https://api.deezer.com/album/234349272/image")
    expect(screen.getByText(/Meu Pedaço de Pecado/))
    expect(screen.getByText(/João Gomes/))
    expect(screen.getByText(/2:37/))

    fail('test fullsong and preview')
  })

})

