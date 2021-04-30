<template>
	<div class="home flex flex-wrap p-4 h-screen w-screen overflow-hidden">
		<Slide />
		<HotArtist/>
		<div class="flex w-full">
			<Genres class="w-1/2 mr-4 overflow-y-scroll h-auto" />
			<NewSongs class="w-1/2 overflow-y-scroll h-auto" />
		</div>
	</div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Slide: () => import("@/components/Slide"),
    HotArtist: () => import("@/components/HotArtist"),
    Genres: () => import("@/components/Genres"),
    NewSongs: () => import("@/components/NewSongs"),
  },
  data() {
    return {
      ball: [],
    };
  },
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      this.$axios({
        methods: "POST",
        url: "/homepage/dragon/ball",
      }).then((res) => {
        const { data } = res;
        this.ball = Object.freeze(data || []);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.player {
  @apply p-4;
}
</style>
