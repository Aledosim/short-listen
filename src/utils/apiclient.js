import axios from 'axios'

axios.defaults.baseURL = "https://api.deezer.com/"

export async function fetchTracksChart({index, limit} = {index: undefined, limit: undefined}){

  try {
    const response = await axios.get('chart', { params: {index, limit} })
    return response
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
    return response
  } catch (error) {
    console.log(error)
  }
}
