<template>
  <div id="app">
    <Sidebar />
    <div class="main">
		<router-view v-slot="{Component}" class="view">
			<transition name="router-fade" mode="out-in">
				<keep-alive>
					<component :is="Component"/>
				</keep-alive>
			</transition>
		</router-view>
      <Loading v-show="loading" />
    </div>
    <Player />
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import { app } from '@tauri-apps/api'
import { mapState } from 'vuex'

export default {
  components: {
    Sidebar: defineAsyncComponent(() => import('@/components/Sidebar/index.vue')),
    Player: defineAsyncComponent(() => import('@/components/Player/index.vue')),
    Loading: defineAsyncComponent(() =>
      import('@/components/Loading/index.vue')
    ),
  },
  watch: {
    $router(to, from) {
      console.log(to, from)
    },
  },
  data() {
    return {
      version: '',
      isApp: true,
    }
  },
  computed: mapState({
    loading: 'loading',
  }),
  async created() {
    try {
      this.version = await app.getTauriVersion()
    } catch (e) {
      console.log(e)
      this.isApp = false
    }
  },
}
</script>

<style lang="scss">
.main {
  @apply relative flex overflow-hidden overflow-y-scroll pb-4;
  height: calc(100vh - 4rem);
  scroll-behavior: smooth;
}
.view {
  @apply w-full h-full p-4;
}
</style>
