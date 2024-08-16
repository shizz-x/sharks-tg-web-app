'use client'
import Axios from '@/app/actions/axios'
export default async function createClaim(xauth, { shark }) {
  const axios = new Axios(xauth)

  console.log('[createClaim] shark', shark)

  const response = await axios
    .post(axios.urlsMap.claim, { shark })
    .then(r => Object.assign(r.data, { CODE: r.status }))
    .catch(e => {
      if (e?.code === 'ECONNABORTED') {
        return Object.assign({ message: 'Iternal error' }, { CODE: 500 })
      }

      return Object.assign(e.response.data, { CODE: e.response.status })
    })
  return response
}
