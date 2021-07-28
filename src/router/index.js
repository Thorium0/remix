import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import Home from '@/views/Home'

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
    component: Vue.defineAsyncComponent(
      () => import('@/views/Discovery/index.vue')
    ),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/mv',
    name: 'MV',
    component: Vue.defineAsyncComponent(() => import('@/views/MV/index.vue')),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/mv/detail/:id',
    name: 'MVDetail',
    component: Vue.defineAsyncComponent(() => import('@/views/MV/detail.vue')),
  },
  {
    path: '/cd',
    name: 'CD',
    component: Vue.defineAsyncComponent(() => import('@/views/CD/index.vue')),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/voice',
    name: 'Voice',
    component: Vue.defineAsyncComponent(
      () => import('@/views/Voice/index.vue')
    ),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/voice/detail/:artistId',
    name: 'ArtistDetail',
    component: Vue.defineAsyncComponent(
      () => import('@/views/Voice/detail.vue')
    ),
  },
  {
    path: '/hot-artist',
    name: 'HotArtist',
    component: Vue.defineAsyncComponent(() => import('@/views/HotArtist.vue')),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/broadcast-radio',
    name: 'BroadcastRadio',
    component: Vue.defineAsyncComponent(() => import('@/views/Radio')),
    meta: {
      // keepAlive: true
    },
  },
]

const router = new VueRouter({
  routes,
})

export default router
