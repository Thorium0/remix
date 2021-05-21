import {getNewestCD} from "@/api/cd"

export default {
	namespaced:true,
	state:{
		albums:{
			albumProducts:[]
		},
	},
	actions:{
		async GetList({commit},payload){
			try{
				const data = await getNewestCD(payload);
				commit("SET_STATE",{name:'albums',data})
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