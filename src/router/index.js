import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
	  meta:{
    	keepAlive:true
	  }
  },
  {
    path: "/discovery",
    name: "Discovery",
    component: () =>
      import(/* webpackChunkName: "discovery" */ "../views/Discovery/index.vue"),
	  meta:{
    	keepAlive:true
	  }
  },
	{
		path: "/mv",
		name: "MV",
		component: () =>
			import(/* webpackChunkName: "mv" */ "../views/MV/index.vue"),
		meta:{
			keepAlive:true
		}
	},{
		path: "/cd",
		name: "CD",
		component: () =>
			import(/* webpackChunkName: "cd" */ "../views/CD/index.vue"),
		meta:{
			keepAlive:true
		}
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
	  meta:{
    	keepAlive:true
	  }
  },
];

const router = new VueRouter({
	routes,
});

export default router;
