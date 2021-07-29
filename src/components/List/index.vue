<template>
  <div class="list">
    <h2 v-if="title">{{ title }}</h2>
    <div class="list-content">
      <div
        class="item"
        v-for="item in list"
        :key="item.id"
        @click.stop="_to(item)"
      >
        <div class="avatar">
          <!--常规展示-->
          <img
            class="lazyload"
            :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
            src="/lazy.webp"
            :data-src="_dataSrc(item)"
            :alt="item.name"
          />
          <Play size="48" fill="#ffffff" />
          <!--首页推荐歌单-->
          <!--					<div class="playCount">-->
          <!--						<Play themed="filled" :size="curTag==='songs'?16:32"/>-->
          <!--						<span class="ml-1 scale-75" v-show="curTag==='songs'">{{_count(item.playCount)}}</span>-->
          <!--					</div>-->
        </div>
        <!--TODO 专辑显示日期-->
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Play } from '@icon-park/vue-next'
import round from 'lodash/round'
import divide from 'lodash/divide'

export default {
  name: 'List',
  components: {
    Play,
  },
  props: {
    title: {
      type: String,
      default: () => '',
    },
    list: {
      type: Array,
      default: () => [],
      required: true,
    },
    imgWidth: {
      type: Number,
      default: () => 195,
    },
    imgHeight: {
      type: Number,
      default: () => 110,
    },
  },
  computed: {
    curTag() {
      return this.$attrs.name
    },
  },
  methods: {
    _to(obj) {
      const { name } = this.$route
      switch (name) {
        case 'MV':
          this.$router.push({ path: `/mv/detail/${obj.id}` })
          break
        default:
          this.$router.push({ path: `/voice/detail/${obj.id}` })
          break
      }
    },
    _dataSrc(item) {
      return item.cover || item.picUrl || item.imgurl || item.coverUrl
    },
    _count(val) {
      return `${round(divide(val, 10000))}万`
    },
  },
}
</script>

<style lang="scss" scoped>
.list {
  h2 {
    @apply flex mb-2 justify-between text-base leading-loose items-center;
    a {
      @apply text-xs text-gray-300;
    }
  }
  &-content {
    @apply grid grid-cols-5 gap-5 leading-10;
    .avatar {
      @apply relative cursor-pointer shadow-lg rounded overflow-hidden;
      img {
        @apply block w-full h-full duration-700 ease-in-out object-cover object-center;
        transform: none;
      }
      .i-icon {
        @apply absolute top-1/2 left-1/2 z-20 -mt-6 -ml-6 opacity-0 duration-300;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
        .i-icon {
          @apply opacity-100;
        }
      }
    }

    p {
      @apply w-full line-clamp-1 text-gray-500;
    }
  }
}
</style>
