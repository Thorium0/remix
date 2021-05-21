import Vue from 'vue'
import './assets/base.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import to from "await-to-js"

Vue.prototype.$to=to;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
