import axios from 'axios'

const instance = axios.create({
  //fetch api (cloud function) URL
  baseURL: 'http://localhost:5001/fir-cccd0/us-central1/api'
})

export default instance
