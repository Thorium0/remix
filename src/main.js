import Vue from 'vue'
import './assets/base.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lazysizes';

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
