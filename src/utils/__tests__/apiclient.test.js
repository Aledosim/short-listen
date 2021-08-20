import { fetchTracksChart } from '../apiclient'

describe('fetchTracksChart tests', () => {
  it('should return a valid value', async () => {
    const actual = await fetchTracksChart()
    expect(actual).toBeDefined()
  })
})
