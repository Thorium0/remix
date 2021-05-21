import {getMVList} from "@/api/mv"

export default {
	namespaced:true,
	state:{
		list:[],
	},
	actions:{
		async GetList({commit},payload){
			try{
				const {data} = await getMVList(payload);
				commit("SET_STATE",{name:'list',data})
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