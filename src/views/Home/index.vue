<template>
	<div class="home">
		<Slide />
		<NewSongs />
			<HotPlayList />
			<HotRadio />
	</div>
</template>

<script>
import {defineAsyncComponent} from "vue"
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    Slide: defineAsyncComponent(() =>
      import('./components/Slide/index.vue')
    ),
    NewSongs: defineAsyncComponent(() =>
      import('./components/NewSongs/index.vue')
    ),
    HotRadio: defineAsyncComponent(() =>
      import('./components/RecRadio/index.vue')
    ),
    HotPlayList: defineAsyncComponent(() =>
      import('./components/HotPlaylist/index.vue')
    ),
  },
  computed: mapState(['loading']),
  created() {
    this.$store.dispatch('home/GetList')
  },
}
</script>

<style lang="scss" scoped>
  .home {
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
</style>
