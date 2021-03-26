import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Login.vue";

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
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
	},
	{
		path: "/login",
		name: "Login",
		component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue")
	}
];

const router = new VueRouter({
	routes
});

export default router;
