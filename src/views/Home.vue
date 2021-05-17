<template>
	<div class="home p-4 h-screen w-screen overflow-hidden">
		<div class="flex">
			<Slide class="w-2/3"/>
			<NewSongs class="w-1/3" />
		</div>
		<div class="flex">
			<Genres class="w-2/3" />
			<HotArtist class="w-1/3"/>
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
    NewSongs: () => import("@/components/NewSongs")
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
