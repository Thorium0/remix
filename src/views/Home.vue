<template>
  <div class="home flex h-screen w-screen">
    <div class="aside flex-none w-40 bg-subBlack">
      <h1 class="text-2xl text-center mb-8">Remix</h1>
      <div class="aside-item">
        <h2>菜单</h2>
        <ul>
          <li class="active">
            <svg-icon icon-class="find-one"></svg-icon>发现
          </li>
          <li><svg-icon icon-class="category-management"></svg-icon>MV</li>
          <li><svg-icon icon-class="cd"></svg-icon>专辑</li>
          <li><svg-icon icon-class="voice"></svg-icon>歌手</li>
          <li><svg-icon icon-class="broadcast-radio"></svg-icon>电台</li>
        </ul>
      </div>

      <div class="aside-item">
        <h2>我的音乐</h2>
        <ul>
          <li><svg-icon icon-class="undo"></svg-icon>最近</li>
          <li><svg-icon icon-class="cd"></svg-icon>专辑</li>
          <li><svg-icon icon-class="heartbeat"></svg-icon>最爱</li>
          <li><svg-icon icon-class="local-pin"></svg-icon>本地</li>
        </ul>
      </div>

      <div class="aside-item">
        <h2>歌单</h2>
        <ul>
          <li><svg-icon icon-class="undo"></svg-icon>最近</li>
          <li><svg-icon icon-class="cd"></svg-icon>专辑</li>
          <li><svg-icon icon-class="heartbeat"></svg-icon>最爱</li>
          <li><svg-icon icon-class="local-pin"></svg-icon>本地</li>
        </ul>
      </div>
    </div>
    <div class="main p-4 sm:px-4 overflow-x-hidden">
      <Slide />
      <div class="flex w-full mt-4">
        <div class="mr-4 w-2/3">
          <HotArtist class="w-full" />
          <div class="flex">
            <Genres class="flex-1 mr-4" />
            <NewSongs class="flex-1" />
          </div>
        </div>
        <div class="player bg-subBlack w-1/3">Player</div>
      </div>
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
:root {
  --tw-ring-offset-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.aside {
  @apply py-8;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  &-item {
    @apply leading-6 mb-4;
    h2 {
      @apply px-8 text-gray-200 font-bold opacity-50;
    }
    li {
      @apply flex items-center relative px-8;
      .svg-icon {
        @apply mr-3.5;
      }
      &.active {
        &:after {
          @apply absolute block top-0 right-0 h-full w-0.5 bg-primary text-primary;
          content: "";
          color: #2ddae8;
        }
      }
    }
  }
}
.player {
  @apply p-4;
}
</style>
