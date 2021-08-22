import axios from 'axios'

axios.defaults.baseURL = "https://api.deezer.com/"

export async function fetchTracksChart(options){
  var index
  var limit
  if (options) {
    index = options.index
    limit = options.limit
  }

  const params = {
    index: index,
    limit: limit
  }

  try {
    const response = await axios.get('chart', { params: params })
    return response.data.tracks
  } catch (error) {
    console.log("Something got really bad")
    console.log(error)
  }
}

export async function fetchTerm(term, {index, limit} = {index: undefined, limit: undefined}){

  const params = {
    q: term,
    index: index,
    limit: limit,
  }

  try {
    const response = await axios.get('search', { params: params })
    return response.data.data
  } catch (error) {
    console.log(error)
  }
}
