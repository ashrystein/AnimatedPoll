import axios from 'axios'

const loadPollData = async () => {
  const endpointURL = 'https://api.jsonbin.io/b/619254c40ddbee6f8b0bc2af'
  const { data } = await axios.get(endpointURL)
  return data
}

export { loadPollData }
