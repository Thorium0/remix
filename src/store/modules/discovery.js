import {getDiscovery} from "@/api/discovery"

export default {
	namespaced:true,
	state:{
		list:[],
	},
	actions:{
		async GetList({commit}){
			commit("SET_STATE",{name:'loading',data:true},{root:true})
			try{
				const {result} = await getDiscovery();
				commit("SET_STATE",{name:'list',data:result})
			}catch (e) {
				console.log(e)
			}finally {
				commit("SET_STATE",{name:'loading',data:false},{root:true})
			}
		}
	},
	mutations:{
		SET_STATE(state,{name,data}){
			state[name]=Object.freeze(data || [])
		}
	}
}