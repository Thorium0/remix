import {getBanners,getRecSongs,getRecMV,getRecDJ} from "@/api/home"

export default {
	namespaced:true,
	state:{
		banners:[],
		songs:[],
		mv:[],
		dj:[]
	},
	actions:{
		async GetList({commit}){
			commit("SET_STATE",{name:'loading',data:true},{root:true})
			try{
				const [banner,songs,mv,dj]=await Promise.all([getBanners(),getRecSongs(),getRecMV(),getRecDJ()])
				// banners
				commit("SET_STATE",{name:'banners',data:banner.banners})
				// songs
				commit("SET_STATE",{name:'songs',data:songs.result})
				// mv
				commit("SET_STATE",{name:'mv',data:mv.result})
				// dj
				commit("SET_STATE",{name:'dj',data:dj.result})
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