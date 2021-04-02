<template>
  <div class="new-songs px-4 py-3 rounded bg-subBlack">
    <h2 class="flex justify-between mb-4 items-center">
      新歌速递
      <router-link to="/hot-artist" class="text-xs text-subText"
        >全部</router-link
      >
    </h2>
    <div class="artist flex justify-between">
      <!--			<div class="artist-item text-center" v-for="(item,key) in artists" :key="key">-->
      <!--				<img :src="item.picUrl" :alt="item.name" class="block mb-2 w-16 h-16 sm:w-12 sm:h-12 object-cover rounded">-->
      <!--				<h3 class="font-bold">-->
      <!--					{{item.name}}-->
      <!--					<span class="block font-normal text-xs text-subText">{{item.musicSize}}</span>-->
      <!--				</h3>-->
      <!--			</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "NewSongs",
  data() {
    return {
      songs: [],
    };
  },
  created() {
    this.$axios({
      url: "/top/song?type=0",
    }).then((res) => {
      console.log(res);
      this.songs = res.song;
    });
  },
};
</script>
