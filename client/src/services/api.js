import axios from 'axios'

const API_BASE_URL = 'https://anime-website-mu-mocha.vercel.app/api/anime'
// const API_BASE_URL = 'http://localhost:5000/api/anime'
// const API_BASE_URL = 'https://animeapi.skin'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers':
      'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Methods': 'OPTIONS,POST',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': '*',
  },
})

// API endpoints
export const fetchTrending = async () => {
  const response = await api.get('/popular')
  return response.data
}

export const fetchNewAnime = async (page = 1) => {
  const response = await api.get(`/new?page=${page}`)
  return response.data
}

export const searchAnime = async (keyword) => {
  const response = await api.get(`/search?q=${encodeURIComponent(keyword)}`)
  return response.data
}

export const fetchEpisodes = async (title) => {
  const response = await api.get(`/episodes?title=${encodeURIComponent(title)}`)
  return response.data
}


export default api