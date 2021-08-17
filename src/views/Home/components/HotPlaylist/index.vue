<template>
	<Recommend
		:title="'Hot PlayList'"
		:to="'/playlist'"
		:list="playlist"
		name="Hot PlayList"
	>
		<template #default>
			<div class="swiper-slide swiper-round" v-for="{coverImagUrl,name} in playlist" :key="name">
				<div class="list-img">
					<img :data-src="coverImagUrl" :data-srcset="coverImagUrl" :alt="name"
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
		</template>
	</Recommend>
</template>

<script>
import {defineAsyncComponent} from "vue";
import {mapState} from "vuex";

export default {
	components: {
		Recommend: defineAsyncComponent(() =>
			import("@/components/Recommend/index.vue")
		)
	},
	name: "HotPlayList",
	computed: mapState("home", ["playlist"])
};
</script>
