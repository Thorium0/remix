<template>
  <div class="mv">
    <List :list="mv.mvs" />
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue"
import { mapState } from 'vuex'
export default {
  name: 'mv',
  components: {
    List: defineAsyncComponent(() => import('@/components/List/index.vue')),
  },
  computed: mapState('voice', ['mv']),
}
</script>
