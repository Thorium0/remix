import _axios from '@/plugins/axios'

const getRadioList = () => _axios.post('/dj/catelist')

export { getRadioList }
