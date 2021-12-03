<template>
	<div class="banner-slide">
		<div class="swiper-container" ref="bannerSlide">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="{bannerId,imageUrl} in banners" :key="bannerId">
					<img :data-src="imageUrl" :data-srcset="imageUrl" :alt="bannerId" class="swiper-lazy">
					<div class="place-image"></div>
				</div>
			</div>
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
	</div>
</template>

<script>
import {defineComponent} from "vue";
import {mapState} from "vuex";
import Swiper from "swiper";
import SwiperCore, {Lazy, Autoplay, Navigation} from "swiper/core";
import "swiper/css/bundle";

SwiperCore.use([Lazy, Autoplay, Navigation]);

export default defineComponent({
	name: "BannerSlide",
	computed: mapState("home", ["banners"]),
	data() {
		return {
			swiper: null
		};
	},
	mounted() {
		this.swiper = new Swiper(this.$refs.bannerSlide, {
			slidesPerView: 3,
			spaceBetween: 16,
			preloadImages: false,
			watchSlidesVisibility: true,
			lazy: {
				loadPrevNext: true,
				preloaderClass:'place-image'
			},
			autoplay: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}
		});
	},
	updated() {
		this.swiper?.update();
		this.swiper?.lazy?.load();
	},
	beforeUnmount() {
		this.swiper.destroy();
		this.swiper = null;
	}
});
</script>

<style lang="scss" scoped>
.banner-slide {
	@apply w-full h-36;
}

.swiper-slide img {
	@apply block w-full h-full object-cover shadow-lg rounded;
}

::v-deep(.swiper-container) {
	@apply w-full h-full;
}

::v-deep(.swiper-button-prev) {
	@apply text-white w-4 h-4 -mt-2;
	filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
}

::v-deep(.swiper-button-next) {
	@apply text-white w-4 h-4 -mt-2;
	filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
}
</style>
