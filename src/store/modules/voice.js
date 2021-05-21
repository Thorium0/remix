import {getArtistList,getArtistDetail,getArtistInfo,getArtistAlbum,getArtistMV,getArtistSongs} from "@/api/voice"
import {isArray,isObject} from "@/utils";

export default {
	namespaced:true,
	state:{
		list:[],
		detail:{},
		info:{},
		album:{
			artist:{},
			hotAlbums:[],
			more:true
		},
		mv:{
			mvs:[],
			hasMore:true
		},
		songs:{
			artist:{},
			hotSongs:[],
			more:true
		}
	},
	actions:{
		async GetList({commit},payload){
			commit("SET_STATE",{name:'loading',data:true},{root:true})
			try{
				const {artists} = await getArtistList(payload);
				commit("SET_STATE",{name:'list',data:artists})
			}catch (e) {
				console.log(e)
			}finally {
				commit("SET_STATE",{name:'loading',data:false},{root:true})
			}
		},
		async GetDetail({commit},payload){
			commit("SET_STATE",{name:'loading',data:true},{root:true})
			const {id} = payload;
			try {
				const [detail,info,album,mv,songs] = await Promise.all([getArtistDetail(id),getArtistInfo(id),getArtistAlbum(id),getArtistMV(id),getArtistSongs(id)]);
				commit("SET_STATE",{name:"detail",data:detail.data})
				commit("SET_STATE",{name:"info",data:info})
				commit("SET_STATE",{name:"album",data:album})
				commit("SET_STATE",{name:"mv",data:mv})
				commit("SET_STATE",{name:"songs",data:songs})
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
	},
	getters:{
		info:state=>({desc:state.info.briefDesc,list:state.info.introduction.map(item=>({...item,txt:item.txt.replaceAll("●","").split("\n")}))})
	}
}