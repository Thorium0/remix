import {getBanners, getNewSongs, getRecMV, getHotDj, getHotPlayList} from "@/api/home";
import {isArray, isObject} from "@/utils";

export default {
	namespaced: true,
	state: {
		banners: [],
		songs: [],
		mv: [],
		dj: []
	},
	actions: {
		async GetList({commit}) {
			commit("SET_STATE", {name: "loading", data: true}, {root: true});
			try {
				const [banner, songs, mv, dj, playlist] = await Promise.allSettled([
					getBanners(),
					getNewSongs(),
					getRecMV(),
					getHotDj(),
					getHotPlayList()
				]);
				// banners
				commit("SET_STATE", {name: "banners", data: banner?.value?.banners});
				// songs
				commit("SET_STATE", {name: "songs", data: songs?.value?.data});
				// mv
				commit("SET_STATE", {name: "mv", data: mv?.value?.result});
				// dj
				commit("SET_STATE", {name: "dj", data: dj?.value?.djRadios});
				// playlist
				console.log(playlist);
				commit("SET_STATE", {name: "playlist", data: playlist?.value?.playlists});
			} catch (e) {
				console.log(e);
			} finally {
				commit("SET_STATE", {name: "loading", data: false}, {root: true});
			}
		}
	},
	mutations: {
		SET_STATE(state, {name, data}) {
			state[name] = isObject(data)
				? {...state[name], ...data}
				: isArray(data)
					? Object.freeze(data || [])
					: data;
		}
	}
};
