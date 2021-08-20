import axios from 'axios'

axios.defaults.baseURL = "https://api.deezer.com/"

export async function fetchTracksChart(index=0, limit=10){
  const params = {
    index: index,
    limit: limit
  }

  try {
    const response = await axios.get('chart', { params: params })
    return response.data.tracks
  } catch (error) {
    console.log(error)
  }
}
