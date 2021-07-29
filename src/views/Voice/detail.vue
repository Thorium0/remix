<template>
  <div class="detail">
    <figure>
      <img :src="album.artist.picUrl" :alt="album.artist.name" />
      <div class="px-4 text-center md:text-left space-y-4">
        <figcaption class="text-2xl leading-10">
          <div class="text-cyan-600 font-bold">{{ album.artist.name }}</div>
          <div class="text-gray-500 text-sm font-normal">
            {{ album.artist.alias[0] }}
          </div>
          <!--TODO 收藏-->
          <div class="text-sm mt-10">
            单曲数:<span class="text-gray-500 px-2 mr-4">{{
              detail.artist.musicSize
            }}</span>
            专辑数:<span class="text-gray-500 px-2 mr-4">{{
              detail.artist.albumSize
            }}</span>
            MV数:<span class="text-gray-500 px-2">{{
              detail.artist.mvSize
            }}</span>
          </div>
        </figcaption>
        <!--				<blockquote>-->
        <!--					<p class="text-lg font-semibold line-clamp-3">{{info.briefDesc}}</p>-->
        <!--				</blockquote>-->
      </div>
    </figure>
    <nav class="detail-tab">
      <button
        :class="{ active: activeTab === 'ArtistAlbums' }"
        @click.stop="activeTab = 'ArtistAlbums'"
      >
        专辑
      </button>
      <button
        :class="{ active: activeTab === 'ArtistMV' }"
        @click.stop="activeTab = 'ArtistMV'"
      >
        MV
      </button>
      <button
        :class="{ active: activeTab === 'ArtistDetail' }"
        @click.stop="activeTab = 'ArtistDetail'"
      >
        歌手详情
      </button>
    </nav>
    <component :is="activeTab" class="py-4"></component>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import { mapState } from 'vuex'

export default {
  name: 'detail',
  components: {
    ArtistAlbums: defineAsyncComponent(() =>
      import('./components/ArtistAlbums')
    ),
    ArtistMV: defineAsyncComponent(() => import('./components/ArtistMV')),
    ArtistDetail: defineAsyncComponent(() =>
      import('./components/ArtistDetail')
    ),
  },
  data: () => ({
    activeTab: 'ArtistAlbums',
  }),
  computed: mapState('voice', ['detail', 'info', 'album', 'mv', 'songs']),
  created() {
    this.$store.dispatch('voice/GetDetail', { id: this.$route.params.artistId })
  },
}
</script>

<style lang="scss" scoped>
.detail {
  figure {
    @apply flex mb-4;
    img {
      @apply w-32 h-32 object-cover rounded-md;
    }
  }
  &-tab {
    @apply flex;
    button {
      @apply text-gray-600 py-4 px-6 block focus:outline-none  border-b-2 font-medium transition duration-300;
      &.active {
        //@apply text-primary  border-primary;
      }
    }
  }
}
</style>
