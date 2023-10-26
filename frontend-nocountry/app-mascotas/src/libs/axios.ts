import axios, { AxiosHeaders } from 'axios'
import { useGlobalStore } from '../store/globalStore'

const authApi = axios.create({
  baseURL: 'https://petcare-app.onrender.com',
  withCredentials: true
})

authApi.interceptors.request.use(config => {
  const token = useGlobalStore.getState().token

  ;(config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`)

  return config
})

export default authApi
