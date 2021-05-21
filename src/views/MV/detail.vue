<template>
	<div class="mv-detail">
		<video ref="videoPlayer" class="video-js w-11/12 mx-auto h-96 shadow-lg"></video>
	</div>
</template>

<script>
import {mapState} from "vuex"
import videojs from "video.js"
import "video.js/src/css/video-js.scss"

export default {
	name: "detail",
	data:()=>({
		player:null
	}),
	computed:mapState("mv",["mv"]),
	created() {
		this.$store.dispatch("mv/GetMVUrl",{id:this.$route.params.id})
	},
	mounted() {
		this.$nextTick(()=>{
			this.player = videojs(this.$refs.videoPlayer,
				{
					autoplay:true,
					controls:true,
					sources:[{src:this.mv.url,type:"video/mp4"}]
				},
				function onPlayerReady() {})
		})
	},
	beforeDestroy() {
		this.player?.dispose()
	}
};

</script>

<style scoped lang="scss"></style>