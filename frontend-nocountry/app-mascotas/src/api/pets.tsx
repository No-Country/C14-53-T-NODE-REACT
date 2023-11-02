import axios from '../libs/axios'

export const GetPets = async () => {
  return axios.get('/api/v1/pets/mypets')
}

export const DeletePet = async (id: string) => {
  return axios.delete(`/api/v1/pets/${id}`)
}
