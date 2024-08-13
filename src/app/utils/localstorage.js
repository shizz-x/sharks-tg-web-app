const setItem = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

const getItem = key => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }
}

const removeItem = key => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key)
  }
}

export default {
  setItem,
  getItem,
  removeItem,
}
