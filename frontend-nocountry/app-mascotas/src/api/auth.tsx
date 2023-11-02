import axios from '../libs/axios'

export const LoginRequest = async (data: object) => {
  return axios.post('/api/v1/auth/login', data)
}

export const RegisterRequest = async (data: object) => {
  return axios.post('/api/v1/auth/register', data)
}

export const tokenRequest = async () => {
  return axios.post('/api/v1/auth/logout')
}
