<template>
  <div class="hot-artist">
    <h2>
      热门歌手
      <router-link to="/hot-artist" class="text-xs text-subText opacity-50"
        >全部</router-link
      >
    </h2>
    <div class="artist">
      <div class="artist-item" v-for="(item, key) in artists" :key="key">
        <img :src="item.picUrl" :alt="item.name" />
        <h3>{{ item.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotArtist',
  data() {
    return {
      artists: [],
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.$axios({
        methods: 'POST',
        url: '/top/artists?offset=0&limit=6',
      }).then((res) => {
        const { artists } = res
        this.artists = Object.freeze(artists || [])
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.hot-artist {
  @apply mb-4 w-full rounded;
  h2 {
    @apply flex mb-2 justify-between items-center text-base leading-loose;
  }
  .artist {
    @apply flex justify-between;
    &-item {
      @apply text-center;
      img {
        @apply block shadow-2xl mb-2 w-16 h-16 sm:w-12 sm:h-12 object-cover rounded;
      }
      h3 {
        @apply block shadow-2xl mb-2 w-16 h-16 sm:w-12 sm:h-12 object-cover rounded;
      }
    }
  }
}
</style>
