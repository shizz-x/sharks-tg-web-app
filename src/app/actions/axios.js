import axios from 'axios'

class Axios {
  urlsMap = {
    createUser: '/createUser',
    hero: '/hero',
    sharks: '/sharks',
    balance: '/balance',
    levels: '/levels',
    inventory: '/inventory',
    delayList: '/delayList',
    job: '/job',
  }

  baseURL = 'http://3.29.180.112/api/'

  xauth = null

  constructor(xauth) {
    this.instance = axios.create({
      baseURL: this.baseURL,
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
