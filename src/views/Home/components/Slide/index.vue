<template>
  <div class="relative slide">
    <vueper-slides
      autoplay
      :bulletsOutside="false"
      :visible-slides="3"
      :gap="1.5"
      :arrowsOutside="false"
      fixed-height="140px"
      :breakpoints="breakPoints"
      v-show="banners.length"
    >
      <vueper-slide
        v-for="item in banners"
        :key="item.bannerId"
        :image="item.imageUrl"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { mapState } from 'vuex'

export default {
  name: 'Slide',
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    breakPoints: {
      640: {
        visibleSlides: 1,
      },
      768: {
        visibleSlides: 2,
        gap: 0.5,
      },
      1024: {
        visibleSlides: 2,
        gap: 1,
      },
      1280: {
        visibleSlides: 3,
        gap: 1.5,
      },
    },
  }),
  computed: mapState('home', ['banners']),
}
</script>
