<template>
  <div class="grid gap-4 home" v-show="!loading">
    <Slide />
    <NewSongs />
    <RecRadio />
    <RecMV />
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
    RecRadio: defineAsyncComponent(() =>
      import('./components/RecRadio/index.vue')
    ),
    RecMV: defineAsyncComponent(() =>
      import('./components/RecMV/index.vue')
    ),
  },
  computed: mapState(['loading']),
  created() {
    this.$store.dispatch('home/GetList')
  },
}
</script>
