'use client'
import Axios from '@/app/actions/axios'
export default async function createUser(
  xauth,
  { first_name, last_name, username, language_code, allows_write_to_pm, id },
) {
  const axios = new Axios(xauth)

  const response = await axios
    .post(axios.urlsMap.createUser, {
      first_name,
      last_name,
      username,
      language_code,
      allows_write_to_pm,
      id,
    })
    .then(r => Object.assign(r.data, { CODE: r.status }))
    .catch(e => {
      if (e?.code === 'ECONNABORTED') {
        return Object.assign({ message: 'Iternal error' }, { CODE: 500 })
      }

      return Object.assign(e.response.data, { CODE: e.response.status })
    })
  return response
}
