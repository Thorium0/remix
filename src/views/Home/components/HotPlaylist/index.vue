<template>
	<Recommend
		:title="'Hot PlayList'"
		:to="'/playlist'"
		:list="playlist"
		name="Hot PlayList"
	>
		<template #default="{item}">
			<img :data-src="item.coverImgUrl" :data-srcset="item.coverImgUrl" :alt="item.name"
						 class="swiper-lazy">
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
