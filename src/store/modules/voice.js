import {getArtistList} from "@/api/voice"

export default {
	namespaced:true,
	state:{
		list:[],
	},
	actions:{
		async GetList({commit},payload){
			try{
				const {artists} = await getArtistList(payload);
				commit("SET_STATE",{name:'list',data:artists})
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