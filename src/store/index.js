import Vue from 'vue'
import Vuex from 'vuex'
import home from "./modules/home"
import cd from "./modules/cd"
import discovery from "./modules/discovery"
import mv from "./modules/mv"
import radio from "./modules/radio"
import voice from "./modules/voice"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loading:false
	},
	mutations: {
		SET_STATE(state,{name,data}){
			state[name]=data;
		}
	},
	actions: {
		SET_LOADING({commit},payload){
			commit("SET_STATE",{name:'loading',payload})
		}
	},
	modules: {
		home,
		cd,
		discovery,
		mv,
		radio,
		voice
	}
})
