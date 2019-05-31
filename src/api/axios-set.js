import axios from 'axios'
const instance = axios.create({
  timeout: 3000000,
  baseURL: '/apis',
  withCredentials: true,
  responseType: 'json',
  delayLoading:true
})

instance.interceptors.response.use(res => {
  return res.data
})

export default instance