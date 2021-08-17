import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/views/Home/index.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			// keepAlive: true,
		}
	},
	{
		path: "/songs",
		name: "Songs",
		component: () => import("@/views/Songs/index.vue"),
		meta: {
			// keepAlive: true,
		}
	},
	{
		path: "/mv",
		name: "MV",
		component: () => import("@/views/MV/index.vue"),
		meta: {
			// keepAlive: true,
		}
	},
	{
		path: "/mv/detail/:id",
		name: "MVDetail",
		component: () => import("@/views/MV/detail.vue")
	},
	{
		path: "/cd",
		name: "CD",
		component: () => import("@/views/CD/index.vue"),
		meta: {
			// keepAlive: true,
		}
	},
	{
		path: "/voice",
		name: "Voice",
		component:
			() => import("@/views/Voice/index.vue"),

		meta: {
			// keepAlive: true,
		}
	},
	{
		path: "/voice/detail/:artistId",
		name: "ArtistDetail",
		component:
			() => import("@/views/Voice/detail.vue")

	},
	{
		path: "/hot-artist",
		name: "HotArtist",
		component: () => import("@/views/HotArtist.vue"),
		meta: {
			// keepAlive: true,
		}
	},
	{
		path: "/broadcast-radio",
		name: "BroadcastRadio",
		component: () => import("@/views/Radio/index.vue"),
		meta: {
			// keepAlive: true
		}
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
