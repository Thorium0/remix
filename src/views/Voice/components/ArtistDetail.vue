<template>
	<div class="detail">
		<blockquote>{{info.desc}}</blockquote>
		<div class="detail-info" v-for="item in info.list" :key="item.ti">
			<h3>{{item.ti}}</h3>
			<p v-for="txt in item.txt" :key="txt">{{txt}}</p>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
	name: "ArtistDetail",
	computed:{
		...mapGetters('voice',['info'])
	}
};

</script>

<style scoped lang="scss">
.detail{
	@apply text-sm leading-8;
	blockquote{
		@apply p-4 bg-gray-200 rounded mb-4 text-gray-800;
	}
	&-info{
		@apply text-gray-400 mb-8;
		h3{
			@apply text-gray-800 font-bold;
		}
	}
}
</style>