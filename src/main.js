import {createApp} from 'vue'
import './assets/base.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lazysizes'
import anime from 'animejs'

const app = createApp(App)

app.config.globalProperties.$anime = anime

app.use(router)
app.use(store)
app.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
app.mount('#app')
