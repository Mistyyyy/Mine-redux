const setItem = (value, key) => localStorage.setItem(value, key)

const getItem = value => localStorage.getItem(value)

const clearItem = value => localStorage.removeItem(value)

const clearAll = () => localStorage.clear()

export default { setItem, getItem, clearItem, clearAll }