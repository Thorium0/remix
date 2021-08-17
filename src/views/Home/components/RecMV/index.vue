<template>
  <Recommend :title="'推荐MV'" :to="'/mv'" :list="mv" name="mv" />
</template>

<script>
import {defineAsyncComponent} from "vue"
import { mapState } from 'vuex'
export default {
  components: {
    Recommend: defineAsyncComponent(() =>
      import('@/components/Recommend/index.vue')
    ),
  },
  name: 'RecMV',
  computed: mapState('home', ['mv']),
}
</script>
