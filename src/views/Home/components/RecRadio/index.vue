<template>
	<Recommend
		:title="'Hot Radio'"
		:to="'/broadcast-radio'"
		:list="dj"
		name="radio"
	>
		<template #default="{item}">
					<img :data-src="item.picUrl" :data-srcset="item.picUrl" :alt="item.name"
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
	name: "RecRadio",
	computed: mapState("home", ["dj"])
};
</script>
