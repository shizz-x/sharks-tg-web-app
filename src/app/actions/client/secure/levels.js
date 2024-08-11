'use client'
import Axios from '@/app/actions/axios'
export default async function lelevs(xauth) {
  const axios = new Axios(xauth)

  const response = await axios
    .get(axios.urlsMap.levels)
    .then(r => r.data)
    .catch(e => console.log(e))
  return response
}
