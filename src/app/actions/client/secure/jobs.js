'use client'
import Axios from '@/app/actions/axios'
export default async function jobs(xauth) {
  const axios = new Axios(xauth)

  const response = await axios
    .get(axios.urlsMap.job)
    .then(r => r.data)
    .catch(e => console.log(e))
  return response
}
