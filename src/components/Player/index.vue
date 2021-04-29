<template>
	<div class="player absolute bottom-0 left-0 w-screen h-16 px-4 flex items-center justify-between z-50">
		<div class="song-detail flex items-center">
			<img :src="curSong.pic" :alt="curSong.title" class="mr-2 w-10 h-10 rounded-full">

			<div class="detail text-sm">
				{{curSong.title}}<em class="block not-italic text-xs opacity-50">{{curSong.author}}</em>
			</div>
		</div>
		<div class="operator flex flex-none px-4">
			<div class="prev" id="prev"><svg-icon icon-class="prev" size="xl"></svg-icon></div>
			<div class="play" id="play" @click="isPlaying?pauseSong():playSong()">
				<svg-icon icon-class="pause" size="xl" v-if="isPlaying"></svg-icon>
				<svg-icon icon-class="play" size="xl" v-else></svg-icon>
			</div>
			<div class="next" id="next"><svg-icon icon-class="next" size="xl"></svg-icon></div>
		</div>
		<div class="cur h-full py-2 relative flex justify-between items-center flex-grow">
<!--			<div class="song-info flex justify-between text-sm text-gray-800">-->
<!--				<div class="song-title">{{curSong.title}}</div>-->
<!--				<div class="song-time text-gray-200 text-xs">{{curSong.curTime || '00:00'}}/{{curSong.durationTime || '00:00'}}</div>-->
<!--			</div>-->
			{{curSong.durationTime}}<progress :value="curSong.percent" max="100" @click="setProgress($event)"></progress>
		</div>
		<div class="volume h-full flex items-center flex-none px-4">
<!--			<svg-icon icon-class="volume-mute" class="mr-4" size="xl" @click.stop="volume=0"></svg-icon>-->
<!--			<progress :value="volume" max="100" @click="setVolume($event)" class="mr-4 w-20"></progress>-->
			<svg-icon icon-class="volume-notice" size="xl" @click.stop="volume=100"></svg-icon>
		</div>
		<audio :src="curSong.src" ref="audio" class="hidden"></audio>
	</div>
</template>

<script>
const faker = require("faker")
faker.locale="zh-CN";

export default {
	name: "index",
	data(){
		return{
			isPlaying:false,
			playList:[],
			curSong:{
				src:'https://freepd.com/music/Beat%20Thee.mp3',
				pic:'https://pic1.zhimg.com/v2-6dbf4602dfea996fb6fd6d74180baabf_xs.jpg?source=1940ef5c',
				author: '阿荣',
				title:'你的答案',
				curTime:null,
				durationTime:null,
				percent:0
			},
			volume:50
		}
	},
	computed:{
		AUDIO(){
			return this.$refs.audio;
		}
	},
	methods: {
		loadSongs(){},
		playSong(){
			this.isPlaying=true;
			this.AUDIO.play()
			this.AUDIO.addEventListener('timeupdate',this.durTime)
			this.AUDIO.addEventListener('timeupdate', this.updateProgress);
		},
		pauseSong(){
			this.isPlaying=false;
			this.AUDIO.pause();
		},
		prevSong(){

		},
		nextSong(){},
		setVolume(event){
			const _width=event.clientWidth;
			const clickX=event.offsetX;
			this.volume=(clickX/_width)*100;
		},
		updateProgress(){
			const {duration,currentTime}=this.AUDIO;
			this.curSong.percent=(currentTime/duration) * 100;
		},
		setProgress(event){
			const _width=event.clientWidth;
			const clickX=event.offsetX;
			const { duration } = this.AUDIO;
			this.AUDIO.currentTime=(clickX/_width) * duration;
			console.log(this.AUDIO.currentTime)
			this.curSong.percent=(clickX/_width)*100;
		},
		durTime(){
			const {duration,currentTime} = this.AUDIO;
			let sec;
			let sec_d;

			// define minutes currentTime
			let min = (currentTime==null)? 0: Math.floor(currentTime/60);
			min = min <10 ? '0'+min:min;

			// define seconds currentTime
			function get_sec (x) {
				if(Math.floor(x) >= 60){

					for (let i = 1; i<=60; i++){
						if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
							sec = Math.floor(x) - (60*i);
							sec = sec <10 ? '0'+sec:sec;
						}
					}
				}else{
					sec = Math.floor(x);
					sec = sec <10 ? '0'+sec:sec;
				}
			}

			get_sec (currentTime,sec);

			// change currentTime DOM
			this.curSong.curTime = min +':'+ sec;

			// define minutes duration
			let min_d = (isNaN(duration) === true)? '0': Math.floor(duration/60);
			min_d = min_d <10 ? '0'+min_d:min_d;


			function get_sec_d (x) {
				if(Math.floor(x) >= 60){

					for (let i = 1; i<=60; i++){
						if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
							sec_d = Math.floor(x) - (60*i);
							sec_d = sec_d <10 ? '0'+sec_d:sec_d;
						}
					}
				}else{
					sec_d = (isNaN(duration) === true)? '0':
						Math.floor(x);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}

			// define seconds duration

			get_sec_d (duration);

			// change duration DOM
			this.curSong.durationTime = min_d +':'+ sec_d;
		},
	}
};

</script>

<style scoped lang="scss">
progress{
	@apply block w-full rounded bg-gray-100 h-1 appearance-none;
	&::-webkit-progress-bar{
		@apply bg-gray-100;
	}
	&::-webkit-progress-value{
		@apply bg-gray-600;
	}
}
</style>