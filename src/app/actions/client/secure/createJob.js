'use client'
import Axios from '@/app/actions/axios'
export default async function createJob(xauth, { shark }) {
  const axios = new Axios(xauth)

  const response = await axios
    .post(axios.urlsMap.job, { shark })
    .then(r => Object.assign(r.data, { CODE: r.status }))
    .catch(e => {
      console.error(e)
      return Object.assign(e.response.data, { CODE: e.response.status })
    })
  return response
}
