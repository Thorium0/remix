import _axios from '@/plugins/axios'

const getNewestCD = ({ offset = 0, area }) =>
  _axios.post(`/album/list/style?area=${area}&offset=${offset}`)

export { getNewestCD }
