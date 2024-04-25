import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8000'
})

export function get(url, token) {
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + token
  return instance.get(url)
}

export default instance