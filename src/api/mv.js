import _axios from "@/plugins/axios"

const getMVList = ({area,type}) => _axios.post(`/mv/all?area=${area}&type=${type}`)
const getMVUrl = ({id}) => _axios.post(`/mv/url?id=${id}`)

export {
	getMVList,
	getMVUrl
}