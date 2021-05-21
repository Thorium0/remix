import {getMVList,getMVUrl} from "@/api/mv"
import {isArray,isObject} from "@/utils";

export default {
	namespaced:true,
	state:{
		list:[],
		mv:{}
	},
	actions:{
		async GetList({commit},payload){
			commit("SET_STATE",{name:'loading',data:true},{root:true})
			try{
				const {data} = await getMVList(payload);
				commit("SET_STATE",{name:'list',data})
			}catch (e) {
				console.log(e)
			}finally {
				commit("SET_STATE",{name:'loading',data:false},{root:true})
			}
		},
		async GetMVUrl({commit},payload){
			commit("SET_STATE",{name:'loading',data:true},{root:true})
			try{
				const {data} = await getMVUrl(payload);
				commit("SET_STATE",{name:'mv',data})
			}catch (e) {
				console.log(e)
			}finally {
				commit("SET_STATE",{name:'loading',data:false},{root:true})
			}
		}
	},
	mutations:{
		SET_STATE(state,{name,data}){
			state[name]=isObject(data)?{...state[name],...data}:isArray(data)?Object.freeze(data || []):data
		}
	}
}