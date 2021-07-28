<template>
  <div class="genres mr-4">
    <h2 class="flex mb-2 justify-between text-base leading-loose items-center">
      歌曲分类
      <router-link to="/hot-artist" class="text-xs text-subText opacity-50"
        >全部</router-link
      >
    </h2>
    <div class="flex flex-wrap justify-between">
      <div
        class="
          genres-item
          flex
          items-center
          justify-center
          mb-4
          w-5/12
          h-12
          text-center text-white
        "
        v-for="(item, key) in genres"
        :key="key"
        :style="`background-color:${colors[key]}`"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Genres',
  data() {
    return {
      genres: [],
      colors: [
        '#395f7d',
        '#9e8e7a',
        '#9e4331',
        '#00383c',
        '#a06d88',
        '#4b3f98',
      ],
    }
  },
  created() {
    this.$axios({
      url: '/playlist/catlist',
      methods: 'post',
    }).then((res) => {
      this.genres = res.sub || []
    })
  },
}
</script>
