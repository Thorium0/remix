<template>
  <div class="mv">
    <div class="filters">
      <div class="area">
        <em>地区：</em
        ><span
          v-for="item in area"
          :key="item"
          @click.stop="_params(item, 'area')"
          :class="{ active: params.area === item }"
          >{{ item }}</span
        >
      </div>
      <div class="type">
        <em>类型：</em
        ><span
          v-for="item in type"
          :key="item"
          @click.stop="_params(item, 'type')"
          :class="{ active: params.type === item }"
          >{{ item }}</span
        >
      </div>
    </div>
    <List :list="list" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MV',
  components: {
    List: Vue.defineAsyncComponent(() => import('@/components/List/index.vue')),
  },
  data: () => ({
    area: ['全部', '内地', '港台', '欧美', '日本', '韩国'],
    type: ['全部', '官方版', '原生', '现场版', '网易出品'],
    params: {
      area: '全部',
      type: '全部',
    },
  }),
  computed: mapState('mv', ['list']),
  created() {
    this.GetList(this.params)
  },
  methods: {
    ...mapActions('mv', ['GetList']),
    _params(val, type) {
      this.params[type] = val
      this.GetList(this.params)
    },
  },
}
</script>
