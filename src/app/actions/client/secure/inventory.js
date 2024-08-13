'use client'
import Axios from '@/app/actions/axios'
export default async function inventory(xauth) {
  const axios = new Axios(xauth)

  const response = await axios
    .get(axios.urlsMap.inventory)
    .then(r => Object.assign(r.data, { CODE: r.status }))
    .catch(e => {
      if (e?.code === 'ECONNABORTED') {
        return Object.assign({ message: 'Iternal error' }, { CODE: 500 })
      }

      return Object.assign(e.response.data, { CODE: e.response.status })
    })
  return response
}
