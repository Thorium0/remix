import _axios from "@/plugins/axios"

// 获取所有歌手
const getArtistList = ({area,type}) => _axios.post(`/artist/list?area=${area}&type=${type}`)
// 获取歌手详情
const getArtistDetail = id =>_axios.post(`/artist/detail?id=${id}`)
// 获取歌手描述
const getArtistInfo = id =>_axios.post(`/artist/desc?id=${id}`)
// 获取歌手专辑 limit默认30 TODO
const getArtistAlbum = id =>_axios.post(`/artist/album?id=${id}`)
// 获取歌手MV
const getArtistMV = id =>_axios.post(`/artist/mv?id=${id}`)
// 获取歌手单曲
const getArtistSongs = id =>_axios.post(`/artists?id=${id}`)
export {
	getArtistList,
	getArtistDetail,
	getArtistInfo,
	getArtistAlbum,
	getArtistMV,
	getArtistSongs
}