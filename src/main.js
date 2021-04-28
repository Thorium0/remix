import Vue from "vue";
import "./plugins/axios";
import "./assets/base.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/icons";
import LazyLoad from "@/components/LazyLoad"
Vue.component('LazyLoad',LazyLoad)

new Vue({
router,
store,
render: (h) => h(App),
}).$mount("#app");
