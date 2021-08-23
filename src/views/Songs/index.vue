<template>
	<div class="songs flex">
		<div class="cover_img flex-none w-1/2 mr-16">
			<img src="/place.jpg" :data-src="songs[0]?.album?.blurPicUrl" alt="" class="shadow-md rounded w-full h-auto object-cover" loading="lazy">
		</div>
		<div class="song-items flex-1">
			<ul class="item flex h-14 py-1" v-for="item in songs" :key="item.id">
				<li class="flex items-center flex-none w-12 h-12 mr-4 img"><img class="block w-full h-full object-cover rounded" :data-src="item?.album?.picUrl" src="/place.jpg" :alt="item.name" loading="lazy"></li>
				<li class="flex flex-col flex-auto name text-sm leading-6">{{ item.name }}<small class="text-gray-400">{{ item?.artists[0]?.name }}</small></li>
				<li class="flex items-center flex-1 duration justify-end text-sm text-black opacity-70">{{ totalTime(item.duration) }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import {mapState} from "vuex";

export default {
	name: "Songs",
	computed: mapState("home", ["songs"]),
	mounted() {
		const images = document.querySelectorAll('img[loading="lazy"]');
		images.forEach(img => {
			let _img = new Image();
			_img.src=img.dataset.src;
			_img.addEventListener('load',e=>{
				img.src=_img.src
			})
		});
	},
	methods:{
		totalTime(time){
			const TIME = (+time/60000).toFixed(2);
			const arr = TIME.split(".")
			return arr[0]<10?`0${arr[0]}:${arr[1]}`:`${arr[0]}:${arr[1]}`;
		}
	}
};
</script>

<style lang="scss" scoped>
.item {
	&:not(:last-child){
		@apply border-b;
	}
}
.song-items{
	@apply h-full overflow-y-scroll;
	scroll-behavior: smooth;
}
</style>
