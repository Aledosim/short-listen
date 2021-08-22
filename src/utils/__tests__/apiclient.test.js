import { fetchTracksChart, fetchTerm } from '../apiclient'

describe('fetchTracksChart tests', () => {
  it('should return a valid value', async () => {
    const actual = await fetchTracksChart()

    expect(actual).toBeDefined()
  })
})

describe('fetchTerm tests', () => {
  it('should return a valid value', async () => {
    const actual = await fetchTerm()

    expect(actual).toBeDefined()
  })
})

