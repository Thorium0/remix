<template>
	<div class="hot-artist">
		<h2>
			热门歌手
			<router-link to="/hot-artist" class="text-xs text-subText opacity-50">全部</router-link>
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
  name: "HotArtist",
  data() {
    return {
      artists: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$axios({
        methods: "POST",
        url: "/top/artists?offset=0&limit=6",
      }).then((res) => {
        console.log("🚀 ~ file: HotArtist.vue ~ line 33 ~ init ~ res", res)
        const { artists } = res;
        this.artists = Object.freeze(artists || []);
      });
    },
  },
};
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>
