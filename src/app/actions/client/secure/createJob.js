'use client'
import Axios from '@/app/actions/axios'
export default async function createJob(xauth, { shark }) {
  const axios = new Axios(xauth)

  const response = await axios
    .post(axios.urlsMap.job, { shark })
    .then(r => r.data)
    .catch(e => console.log(e))
  return response
}
