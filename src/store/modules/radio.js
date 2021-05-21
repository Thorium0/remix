import {getRadioList} from "@/api/radio"
import {isObject,isArray} from "@/utils"
export default {
	namespaced:true,
	state:{
		list:[],
		loading:false
	},
	actions:{
		async GetList({commit}){
			commit("SET_STATE",{name:"loading",data:true})
			try{
				const {categories} = await getRadioList();
				commit("SET_STATE",{name:'list',data:categories})
			}catch (e) {
				console.log(e)
			}finally {
				commit("SET_STATE",{name:"loading",data:false})
			}
		}
	},
	mutations:{
		SET_STATE(state,{name,data}){
			state[name]=isObject(data)?{...state[name],...data}:isArray(data)?Object.freeze(data || []):data
		}
	}
}