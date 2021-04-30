import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/hot-artist",
    name: "HotArtist",
    component: () =>
      import(/* webpackChunkName: "hotArtist" */ "../views/HotArtist.vue"),
  },
  {
    path: "/broadcast-radio",
    name: "BroadcastRadio",
    component: () =>
        import(/* webpackChunkName: "broadcastRadio" */ "../views/BroadcastRadio.vue"),
  },
];

const router = new VueRouter({
	routes,
});

export default router;
