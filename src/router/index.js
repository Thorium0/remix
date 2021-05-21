import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/discovery',
		name: 'Discovery',
		component: () => import(/* webpackChunkName: "discovery" */ '@/views/Discovery/index.vue'),
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/mv',
		name: 'MV',
		component: () => import(/* webpackChunkName: "mv" */ '@/views/MV/index.vue'),
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/mv/detail/:id',
		name: 'MVDetail',
		component: () => import(/* webpackChunkName: "mvDetail" */ '@/views/MV/detail.vue'),
	},
	{
		path: '/cd',
		name: 'CD',
		component: () => import(/* webpackChunkName: "cd" */ '@/views/CD/index.vue'),
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/voice',
		name: 'Voice',
		component: () => import(/* webpackChunkName: "voice" */ '@/views/Voice/index.vue'),
		meta: {
			keepAlive: true
		}
	},
	{
		path:"/voice/detail/:artistId",
		name:"ArtistDetail",
		component:()=>import(/* webpackChunkName: "voiceDetail" */ '@/views/Voice/detail.vue')
	},
	{
		path: '/hot-artist',
		name: 'HotArtist',
		component: () => import(/* webpackChunkName: "hotArtist" */ '@/views/HotArtist.vue'),
		meta:{
			keepAlive: true
		}
	},
	{
		path: '/broadcast-radio',
		name: 'BroadcastRadio',
		component: () => import(/* webpackChunkName: "broadcastRadio" */ '@/views/Radio'),
		meta: {
			// keepAlive: true
		}
	}
]

const router = new VueRouter({
  routes
})

export default router
