<template>
	<div class="banners">
		<h2 class="mb-2 text-base leading-loose">专辑</h2>
		<div class="w-full" id="fade-slider">
			<div class="slide" v-for="(item, key) in banners" :key="key">
				<img  :src="item.pic" :alt="item.typeTitle" />
			</div>
		</div>
	</div>
</template>

<script>
import { BoxSlider, FadeSlider } from '@boxslider/slider';

export default {
  name: "Slide",
  data() {
    return {
      banners: [],
      slider:null
    };
  },
  created() {
    this.$axios({
      methods: "POST",
      url: "/homepage/block/page",
    }).then((res) => {
      const {
        data: { blocks },
      } = res;
      const {
        extInfo: { banners },
      } = blocks.find((item) => item.blockCode === "HOMEPAGE_BANNER");
      this.banners = Object.freeze(banners || []);
      this.$nextTick(()=>{
		  this.initSlider()
	  })

    });
  },
	methods:{
  		initSlider(){
			this.slider = new BoxSlider(document.getElementById('fade-slider'), {
				effect: new FadeSlider(),
				autoScroll: true,
				timeout: 2000
			});
		}
	},
	beforeDestroy() {
  	this.slider=null;
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slide, img {
	height: 100%;
	width: 100%;
}

#fade-slider {
	height: 180px;
}
</style>
