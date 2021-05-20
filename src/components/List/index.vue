<template>
	<div class="list">
		<div class="item" v-for="item in list" :key="item.id">
			<div class="avatar">
				<img class="lazyload" src="/lazy.png" :data-src="item.cover || item.picUrl" :alt="item.name">
				<Play size="48" fill="#ffffff"/>
			</div>
			<p>{{item.name}}</p>
		</div>
	</div>
</template>
<script>
import { Play } from "@icon-park/vue";
import 'lazysizes';

export default {
	name: "List",
	components: {
		Play
	},
	props:{
		list:{
			type:Array,
			default:()=>[],
			required:true
		}
	},
	mounted() {
		this.$nextTick(()=>{

		})
	}
};

</script>

<style scoped lang="scss">
.list{
	@apply grid grid-cols-5 gap-5 leading-10;
	.avatar{
		@apply relative cursor-pointer shadow-lg rounded overflow-hidden;
		img{
			@apply block w-full h-full duration-700 ease-in-out object-cover;
			transform: none;
		}
		.i-icon{
			@apply absolute top-1/2 left-1/2 z-20 -mt-6 -ml-6 opacity-0;
		}
		&:hover{
			img{
				transform: scale(1.1);
			}
			.i-icon{
				@apply opacity-100;
			}
		}
	}

	p{
		@apply w-full overflow-hidden overflow-ellipsis whitespace-nowrap;
	}
}
</style>