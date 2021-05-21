import _axios from "@/plugins/axios"

const getMVList = ({area,type}) => _axios.post(`/mv/all?area=${area}&type=${type}`)

export {
	getMVList
}