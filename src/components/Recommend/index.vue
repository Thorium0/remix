<template>
	<div class="list">
		<h2>{{ title }}
			<router-link :to="to">See All</router-link>
		</h2>
		<div class="list-slide">
			<div class="swiper-container" ref="listSwiper">
				<div class="swiper-wrapper">
					<slot>
						<div class="swiper-slide" v-for="{album,artists,name} in list" :key="name">
							<div class="list-img">
								<img :data-src="album.picUrl" :data-srcset="album.picUrl" :alt="artists"
									 class="swiper-lazy">
								<div class="place-image"></div>
								<div class="list-play">
									<Play size="40" fill="rgba(0,0,0,.3)" />
								</div>
							</div>
							<div class="list-info">
								{{ name }}
							</div>
						</div>
					</slot>
				</div>
				<button class="btn btn_prev sm-hide disable" title="Previous">
					<svg width="7" height="12" viewBox="0 0 10 17">
						<path class="svg_color" fill="#000" fill-rule="evenodd"
							  d="M1.414 0L0 1.414l7 7-7 7 1.414 1.414 8.414-8.414z"></path>
					</svg>
				</button>
				<button class="btn btn_next sm-hide " title="Next">
					<svg width="7" height="12" viewBox="0 0 10 17">
						<path class="svg_color" fill="#000" fill-rule="evenodd"
							  d="M1.414 0L0 1.414l7 7-7 7 1.414 1.414 8.414-8.414z"></path>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import {defineComponent} from "vue";
import Swiper from "swiper";
import SwiperCore, {Autoplay, Navigation, Lazy} from "swiper/core";
import "swiper/swiper-bundle.css";
import {Play} from "@icon-park/vue-next";

SwiperCore.use([Lazy, Autoplay, Navigation]);
export default defineComponent({
	name: "List",
	components: {
		Play
	},
	props: {
		title: {
			type: String,
			default: () => "",
			required: true
		},
		to: {
			type: String,
			default: () => "",
			required: true
		},
		list: {
			type: Array,
			default: () => [],
			required: true
		}
	},
	computed: {
		curTag() {
			return this.$attrs.name;
		}
	},
	data() {
		return {
			swiper: null
		};
	},
	mounted() {
		this.swiper = new Swiper(this.$refs.listSwiper, {
			slidesPerView: 6,
			spaceBetween: 16,
			// freeMode: true,
			preloadImages: false,
			watchSlidesVisibility: true,
			lazy: {
				loadPrevNext: true,
				preloaderClass: "place-image"
			},
			navigation: {
				nextEl: ".btn_next",
				prevEl: ".btn_prev",
				hideOnClick: true
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
::v-deep(.swiper-container) {
	@apply w-full h-full;
}

.btn {
	@apply flex justify-center items-center absolute w-8 h-8 bg-gray-200 top-1/2 left-4 rounded-full -mt-4 opacity-0;
	transition: all .2s .2s;
	z-index: 9999;

	&.btn_prev {
		transform: rotate(180deg);
	}

	&.btn_next {
		@apply left-auto right-4;
	}
}

.swiper-container:hover .btn {
	@apply opacity-100;
}
</style>
