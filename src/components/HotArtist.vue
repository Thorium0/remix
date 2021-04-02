<template>
  <div class="hot-artist p-4 mb-4 w-full rounded bg-subBlack">
    <h2 class="flex justify-between mb-4 items-center">
      热门歌手
      <router-link to="/hot-artist" class="text-xs text-subText"
        >全部</router-link
      >
    </h2>
    <div class="artist flex justify-between">
      <div
        class="artist-item text-center"
        v-for="(item, key) in artists"
        :key="key"
      >
        <img
          :src="item.picUrl"
          :alt="item.name"
          class="block shadow-2xl mb-2 w-16 h-16 sm:w-12 sm:h-12 object-cover rounded"
        />
        <h3 class="font-bold">
          {{ item.name }}
          <span class="block font-normal text-xs text-subText">{{
            item.musicSize
          }}</span>
        </h3>
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
        console.log(res);
        const { artists } = res;
        this.artists = Object.freeze(artists || []);
      });
    },
  },
};
</script>
