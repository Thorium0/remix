<template>
  <div class="mv">
    <div class="filters">
      <div class="area">
        <em>地区：</em
        ><span
          v-for="item in area"
          :key="item.label"
          @click.stop="_params(item.value, 'area')"
          :class="{ active: params.area === item.value }"
          >{{ item.label }}</span
        >
      </div>
      <div class="type">
        <em>类型：</em
        ><span
          v-for="item in type"
          :key="item.label"
          @click.stop="_params(item.value, 'type')"
          :class="{ active: params.type === item.value }"
          >{{ item.label }}</span
        >
      </div>
    </div>
    <List :list="list" />
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Voice',
  components: {
    List:defineAsyncComponent(()=>import('@/components/List/index.vue')),
  },
  data: () => ({
    area: [
      { label: '全部', value: '-1' },
      { label: '华语', value: '7' },
      { label: '欧美', value: '96' },
      { label: '日本', value: '8' },
      { label: '韩国', value: '16' },
      { label: '其他', value: '0' },
    ],
    type: [
      { label: '全部', value: '-1' },
      { label: '男歌手', value: '1' },
      { label: '女歌手', value: '2' },
      { label: '乐队', value: '3' },
    ],
    params: {
      area: '-1',
      type: '-1',
    },
  }),
  computed: mapState('voice', ['list']),
  created() {
    this.GetList(this.params)
  },
  methods: {
    ...mapActions('voice', ['GetList']),
    _params(val, type) {
      this.params[type] = val
      this.GetList(this.params)
    },
  },
}
</script>
