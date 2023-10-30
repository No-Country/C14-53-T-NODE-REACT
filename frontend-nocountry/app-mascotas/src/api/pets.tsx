import axios from '../libs/axios'



export const GetPets = async () => {
  return axios.get('/api/v1/pets/mypets')
}
