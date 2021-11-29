import axios from 'axios'
import config from './Config'

const loadPollData = async () => {
  const endpointURL = `${config.baseUrl}619254c40ddbee6f8b0bc2af`
  const { data } = await axios.get(endpointURL)
  return data
}

const answerAndGetPollPercentages = async (answer: string | null) => {
  const endpointURL = `${config.baseUrl}61927bef0ddbee6f8b0bd64c?answer=${answer}`
  const { data } = await axios.get(endpointURL)
  return data
}

export { loadPollData, answerAndGetPollPercentages }
