import _axios from "@/plugins/axios"

const getArtistList = ({area,type}) => _axios.post(`/artist/list?area=${area}&type=${type}`)

export {
	getArtistList
}