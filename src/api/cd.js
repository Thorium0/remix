import _axios from "@/plugins/axios"

const getNewestCD = () => _axios.post("/album/newest")

export {
	getNewestCD
}