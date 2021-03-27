<template>
	<splide :options="options" :slides="banners">
		<splide-slide v-for="(item,key) in banners" :key="key">
			<img :src="item.pic" :alt="item.typeTitle">
		</splide-slide>
	</splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide"

export default {
	name: "Slide",
	components:{
		Splide,
		SplideSlide
	},
	data(){
		return{
			banners:[],
			options: {
				type:'loop',
				rewind:true,
				// cover: true,
				// height: '13rem',
				perPage: 3,
				gap:'1rem',
				// autoplay: true,
				focus: 'center'
			}
		}
	},
	created(){
		this.$axios({
			methods:"POST",
			url:"/homepage/block/page"
		}).then(res=>{
			const {data:{blocks}} = res;
			const {extInfo:{banners}}=blocks.find(item=>item.blockCode==='HOMEPAGE_BANNER');
			this.banners=Object.freeze(banners||[])
		})
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@splidejs/splide/dist/css/themes/splide-default.min.css";
.splide{
	width: 100%;
	overflow: hidden;
}
.splide__slide{
	img{
		@apply transition-all duration-500 ease-in-out;
	}
	&.is-active{
		img{
			@apply scale-150 transition-all duration-500 ease-in-out;
		}
	}
}
</style>
