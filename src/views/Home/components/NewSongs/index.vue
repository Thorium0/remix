<template>
  <Recommend
    :title="'推荐歌单'"
    :to="'/discovery'"
    :list="songs"
    name="songs"
  />
  <!--	<List :list="songs" :title="'推荐歌单'"/>-->
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    Recommend: Vue.defineAsyncComponent(() =>
      import('@/components/Recommend/index.vue')
    ),
    // List:()=>import("@/components/List")
  },
  name: 'NewSongs',
  computed: mapState('home', ['songs']),
}
</script>
