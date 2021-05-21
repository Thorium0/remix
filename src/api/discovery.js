import _axios from "@/plugins/axios"

const getDiscovery = () => _axios.post("/personalized")

export {
	getDiscovery
}