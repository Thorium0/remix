import {defineAsyncComponent} from "vue"
import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '@/views/Home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/discovery',
    name: 'Discovery',
    component: defineAsyncComponent(
      () => import('@/views/Discovery/index.vue')
    ),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/mv',
    name: 'MV',
    component: defineAsyncComponent(() => import('@/views/MV/index.vue')),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/mv/detail/:id',
    name: 'MVDetail',
    component: defineAsyncComponent(() => import('@/views/MV/detail.vue')),
  },
  {
    path: '/cd',
    name: 'CD',
    component: defineAsyncComponent(() => import('@/views/CD/index.vue')),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/voice',
    name: 'Voice',
    component: defineAsyncComponent(
      () => import('@/views/Voice/index.vue')
    ),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/voice/detail/:artistId',
    name: 'ArtistDetail',
    component: defineAsyncComponent(
      () => import('@/views/Voice/detail.vue')
    ),
  },
  {
    path: '/hot-artist',
    name: 'HotArtist',
    component: defineAsyncComponent(() => import('@/views/HotArtist.vue')),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/broadcast-radio',
    name: 'BroadcastRadio',
    component: defineAsyncComponent(() => import('@/views/Radio/index.vue')),
    meta: {
      // keepAlive: true
    },
  },
]

const router = createRouter({
	history:createWebHashHistory(),
  routes,
})

export default router
