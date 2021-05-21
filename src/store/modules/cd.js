import {getNewestCD} from "@/api/cd"

export default {
	namespaced:true,
	state:{
		list:[],
	},
	actions:{
		async GetList({commit}){
			try{
				const {albums} = await getNewestCD();
				commit("SET_STATE",{name:'list',data:albums})
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