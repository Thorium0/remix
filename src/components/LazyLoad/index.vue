<template>
  <img :data-src="img.src" :alt="img.alt" class="lazyload" />
</template>

<script>
import 'lazysizes'
export default {
  props: {
    img: {
      type: Object,
      default() {
        return {
          src: '',
          alt: '',
        }
      },
    },
  },
}
</script>
