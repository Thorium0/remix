<template>
  <div class="grid gap-4 home" v-show="!loading">
    <Slide />
    <NewSongs />
    <RecRadio />
    <RecMV />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    Slide: Vue.defineAsyncComponent(() =>
      import('./components/Slide/index.vue')
    ),
    NewSongs: Vue.defineAsyncComponent(() =>
      import('./components/NewSongs/index.vue')
    ),
    RecRadio: Vue.defineAsyncComponent(() =>
      import('./components/RecRadio/index.vue')
    ),
    RecMV: Vue.defineAsyncComponent(() =>
      import('./components/RecMV/index.vue')
    ),
  },
  computed: mapState(['loading']),
  created() {
    this.$store.dispatch('home/GetList')
  },
}
</script>
