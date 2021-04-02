<template>
  <div class="genres mr-4 p-4 w-2/5 rounded bg-subBlack">
    <h2 class="flex justify-between mb-4 items-center">
      歌曲分类
      <router-link to="/hot-artist" class="text-xs text-subText"
        >全部</router-link
      >
    </h2>
    <div class="genres flex flex-wrap justify-between">
      <div
        class="genres-item flex items-center justify-center mb-4 w-5/12 h-12 text-center text-white"
        v-for="(item, key) in genres.slice(0, 6)"
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
  name: "Genres",
  data() {
    return {
      genres: [],
      colors: [
        "#395f7d",
        "#9e8e7a",
        "#9e4331",
        "#00383c",
        "#a06d88",
        "#4b3f98",
      ],
    };
  },
  created() {
    this.$axios({
      url: "/playlist/catlist",
      methods: "post",
    }).then((res) => {
      this.genres = res.sub || [];
    });
  },
};
</script>

<!--<style lang="scss" scoped>-->
<!--.genres-item:nth-of-type(2n) {-->
<!--	@apply ml-4;-->
<!--}-->
<!--</style>-->
