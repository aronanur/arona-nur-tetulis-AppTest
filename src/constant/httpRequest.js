import { useNetInfo } from '@react-native-community/netinfo'
import axios from 'axios'
import {API_URL} from '../../env.json'

const httpRequest = axios.create({
  baseURL: API_URL,
  timeout: 30000,
})

const requestHandler = async (request) => {
  return request
}

const errorHandler = (error) => {
  console.log(error, 'AXIOS')
  return Promise.reject(error)
}

httpRequest.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error),
)

export default httpRequest