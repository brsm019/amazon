import axios from 'axios'

const instance = axios.create({
  //fetch api (cloud function) URL
  baseURL: '...',
})

export default instance
