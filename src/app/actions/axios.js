import axios from 'axios'

/**
 * Axios класс для обращения к серверу
 *
 * @class Axios
 */
class Axios {
  urlsMap = {
    createUser: '/createUser',
    hero: '/api/hero',
    sharks: '/api/sharks',
    balance: '/api/balance',
    levels: '/api/levels',
    inventory: '/api/inventory',
    delayList: '/api/delayList',
    job: '/api/job',
  }

  xauth = null

  constructor(xauth) {
    this.instance = axios.create({
      headers: {
        TelegramAuth: xauth,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
  }

  get(url, params) {
    return this.instance.get(url, {
      ...params,
    })
  }

  post(url, data) {
    return this.instance.post(url, {
      ...data,
    })
  }
}

export default Axios
