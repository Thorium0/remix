import {getRadioList} from "@/api/radio"

export default {
	namespaced:true,
	state:{
		list:[],
	},
	actions:{
		async GetList({commit}){
			try{
				const {categories} = await getRadioList();
				commit("SET_STATE",{name:'list',data:categories})
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