import axios from '../libs/axios'



export const GetCalendar = async (petId: string | undefined) => {
  return axios.get('/api/v1/calendar/' + petId)
}
