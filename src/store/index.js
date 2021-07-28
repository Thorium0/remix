import * as Vue from 'vue'
import * as Vuex from 'vuex'
import home from './modules/home'
import cd from './modules/cd'
import discovery from './modules/discovery'
import mv from './modules/mv'
import radio from './modules/radio'
import voice from './modules/voice'

export default Vuex.createStore({
  state: {
    loading: false,
  },
  mutations: {
    SET_STATE(state, { name, data }) {
      state[name] = data
    },
  },
  actions: {
    SET_LOADING({ commit }, payload) {
      commit('SET_STATE', { name: 'loading', payload })
    },
  },
  modules: {
    home,
    cd,
    discovery,
    mv,
    radio,
    voice,
  },
})
