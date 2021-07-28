<template>
  <div class="recommend">
    <h2>{{ title }}<router-link :to="to">全部</router-link></h2>
    <div class="items" :class="curTag">
      <div class="item" v-for="(item, key) in list" :key="key">
        <div class="images relative">
          <img :src="item.picUrl" :alt="item.name" />
          <div class="playCount">
            <Play themed="filled" :size="curTag === 'songs' ? 16 : 32" />
            <span class="ml-1 scale-75" v-show="curTag === 'songs'">{{
              _count(item.playCount)
            }}</span>
          </div>
        </div>
        <h3>{{ item.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { Play } from '@icon-park/vue'
import divide from 'lodash/divide'
import round from 'lodash/round'
export default {
  name: 'Recommend',
  components: {
    Play,
  },
  props: {
    title: {
      type: String,
      default: () => '',
      required: true,
    },
    to: {
      type: String,
      default: () => '',
      required: true,
    },
    list: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  computed: {
    curTag() {
      return this.$attrs.name
    },
  },
  methods: {
    _count(val) {
      return `${round(divide(val, 10000))}万`
    },
  },
}
</script>

<style lang="scss" scoped>
.recommend {
  h2 {
    @apply flex mb-2 justify-between text-base leading-loose items-center;
    a {
      @apply text-xs text-gray-300;
    }
  }
  .items {
    @apply grid grid-cols-6 gap-6;
    .item {
      @apply relative cursor-pointer;
      img {
        @apply block mb-2 rounded;
      }
      h3 {
        @apply line-clamp-1 text-gray-500;
      }
      .playCount {
        @apply flex absolute top-1 right-1 z-40 text-white opacity-75;
      }
    }
    &.mv {
      @apply grid-cols-4;
    }
    &.mv,
    &.radio {
      .playCount {
        @apply w-full h-full top-0 left-0 right-auto items-center justify-center opacity-0 duration-500;
      }
      .item {
        &:hover {
          .playCount {
            @apply opacity-100;
          }
        }
      }
    }
  }
}
</style>
