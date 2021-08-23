import { getNewestCD } from '@/api/cd'
import { isObject, isArray } from '@/utils'

export default {
  namespaced: true,
  state: {
    albums: {
      albumProducts: [],
    },
  },
  actions: {
    async GetList({ commit }, payload) {
      try {
        const data = await getNewestCD(payload)
        commit('SET_STATE', { name: 'albums', data })
      } catch (e) {
        console.log(e)
      }
    },
  },
  mutations: {
    SET_STATE(state, { name, data }) {
      state[name] = isObject(data)
        ? { ...state[name], ...data }
        : isArray(data)
        ? Object.freeze(data || [])
        : data
    },
  },
}
