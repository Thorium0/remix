<template>
  <Recommend
    :title="'New Songs'"
    :to="'/songs'"
    :list="songs"
    name="songs"
  />
</template>

<script>
import {defineAsyncComponent} from "vue"
import { mapState } from 'vuex'
export default {
  components: {
    Recommend: defineAsyncComponent(() =>
      import('@/components/Recommend/index.vue')
    ),
    // List:()=>import("@/components/List")
  },
  name: 'NewSongs',
  computed: mapState('home', ['songs']),
}
</script>
