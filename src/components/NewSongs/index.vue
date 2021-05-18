<template>
  <div class="new-songs px-4">
    <h2 class="flex mb-2 justify-between text-base leading-loose items-center">
      新歌速递
      <router-link to="/hot-artist" class="text-xs text-subText opacity-50"
        >全部</router-link
      >
    </h2>
    <div class="artist flex flex-wrap justify-between">
		<div class="artist-item flex items-center justify-between w-full text-center" v-for="(item,key) in songs" :key="key">
			<img :src="item.album.blurPicUrl" :alt="item.album.name" class="block mb-2 w-12 h-12 object-cover rounded">
			<h3 class="font-bold opacity-50">
				{{item.name}}
			</h3>
      </div>
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
      console.log("🚀 ~ file: NewSongs.vue ~ line 33 ~ created ~ res", res)
	  const {data=[]} = res
      this.songs = Object.freeze(data.slice(0,3));
    });
  },
};
</script>
