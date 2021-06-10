import axios from 'axios'

const instance = axios.create({
  //fetch api (cloud function) URL
  baseURL: 'https://us-central1-fir-cccd0.cloudfunctions.net/api',
  // baseURL: "http://localhost:5001/fir-cccd0/us-central1/api",

  //'http://localhost:5001/fir-cccd0/us-central1/api' <<< localhost for debugging
  //'https://us-central1-fir-cccd0.cloudfunctions.net/api' <<< Deployed URL
})

export default instance
