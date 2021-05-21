import {getDiscovery} from "@/api/discovery"

export default {
	namespaced:true,
	state:{
		list:[],
	},
	actions:{
		async GetList({commit}){
			try{
				const {result} = await getDiscovery();
				commit("SET_STATE",{name:'list',data:result})
			}catch (e) {
				console.log(e)
			}
		}
	},
	mutations:{
		SET_STATE(state,{name,data}){
			state[name]=Object.freeze(data || [])
		}
	}
}