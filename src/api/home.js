import _axios from '@/plugins/axios'

const getBanners = () => _axios.post('/banner')
const getRecSongs = () => _axios.post('/personalized?limit=12')
const getRecMV = () => _axios.post('/personalized/mv')
const getRecDJ = () => _axios.post('/personalized/djprogram')

export { getBanners, getRecSongs, getRecMV, getRecDJ }
