import * as Vue from 'vue'
import './assets/base.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lazysizes'
import anime from 'animejs'

window.$vueApp.config.globalProperties.$anime = anime

window.$vueApp = Vue.createApp(App)
window.$vueApp.use(router)
window.$vueApp.use(store)
window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
window.$vueApp.mount('#app')
