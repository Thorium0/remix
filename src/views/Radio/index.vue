<template>
  <div class="broadcast-radio">
    <div
      v-for="(item, key) in list"
      class="broadcast-radio-item"
      :key="item.id"
      :style="{ 'background-color': colors[key] }"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'BroadcastRadio',
  data() {
    return {
      colors: [
        '#994ff3',
        '#e5c38d',
        '#cbc69a',
        '#f2eef5',
        '#b1c9a7',
        '#7ccfc1',
        '#62d2ce',
        '#48d5db',
        '#2dd8e8',
        '#40dcea',
        '#96ccb4',
        '#fbdd74',
      ],
      detail: {},
      active: 0,
    }
  },
  computed: mapState('radio', ['list', 'loading']),
  created() {
    this.GetList().then((_) => {
      this.$nextTick((_) => {
        this.$anime({
          targets: '.broadcast-radio .broadcast-radio-item',
          scale: [
            { value: 0.1, easing: 'easeOutSine', duration: 1000 },
            { value: 1, easing: 'easeInOutQuad', duration: 1000 },
          ],
          opacity: [0, 1],
          duration: 500,
          delay: this.$anime.stagger(100, { from: 'center' }),
        })
      })
    })
  },
  methods: mapActions('radio', ['GetList']),
}
</script>

<style lang="scss" scoped>
.broadcast-radio {
  @apply grid gap-4 grid-cols-3 h-full;
  &-item {
    background-color: #ff8e99;
    @apply flex items-center justify-center cursor-pointer text-white text-base;
  }
}
</style>
