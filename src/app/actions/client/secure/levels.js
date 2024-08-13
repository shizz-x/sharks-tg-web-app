'use client'
import Axios from '@/app/actions/axios'
export default async function lelevs(xauth) {
  const axios = new Axios(xauth)

  const response = await axios
    .get(axios.urlsMap.levels)
    .then(r => Object.assign(r.data, { CODE: r.status }))
    .catch(e => {
      console.error(e)
      return Object.assign(e.response.data, { CODE: e.response.status })
    })
  return response
}
