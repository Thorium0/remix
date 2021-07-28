<template>
  <div class="discovery">
    <List :list="list" />
  </div>
</template>

<script>
import List from '@/components/List/index.vue'
import { mapState } from 'vuex'
export default {
  name: 'Discovery',
  components: {
    List,
  },
  computed: mapState('discovery', ['list']),
  created() {
    this.$store.dispatch('discovery/GetList')
  },
}
</script>
