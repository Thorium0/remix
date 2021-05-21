import {getDiscovery} from "@/api/discovery"
import {isObject,isArray} from "@/utils";

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
			state[name]=isObject(data)?{...state[name],...data}:isArray(data)?Object.freeze(data || []):data
		}
	}
}