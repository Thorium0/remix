<template>
  <div class="player flex w-screen h-20 p-4">
    <div class="player-operator flex items-center">
      <div class="prev" id="prev"><GoStart size="24" /></div>
      <div
        class="play mx-10"
        id="play"
        @click="isPlaying ? pauseSong() : playSong()"
      >
        <Pause v-if="isPlaying" size="24" />
        <PlayOne v-else size="24" fill="red" />
      </div>
      <div class="next" id="next"><GoEnd size="24" /></div>

		<small>{{ `${curSong.curTime} / ${curSong.durationTime}`}}</small>
    </div>
	  <div class="player-detail flex items-center">
		  <img :src="curSong.pic" :alt="curSong.title" class="mr-2 w-12 h-12 rounded object-cover" />
		  <div class="detail text-base">
			  {{ curSong.title }}
			  <small class="block text-xs opacity-30">{{ curSong.author }}</small>
		  </div>
	  </div>
	  <div class="volume"></div>
<!--    <div-->
<!--      class="-->
<!--        cur-->
<!--        h-full-->
<!--        py-2-->
<!--        relative-->
<!--        flex-->
<!--        justify-between-->
<!--        items-center-->
<!--        flex-grow-->
<!--      "-->
<!--    >-->
<!--      {{ curSong.curTime || '00:00'-->
<!--      }}<progress-->
<!--        :value="curSong.percent"-->
<!--        max="100"-->
<!--        @click="setProgress($event)"-->
<!--      ></progress-->
<!--      >{{ curSong.durationTime || '00:00' }}-->
<!--    </div>-->
<!--    <div class="player-volume">-->
<!--      &lt;!&ndash;			<svg-icon icon-class="volume-mute" class="mr-4" size="xl" @click.stop="volume=0"></svg-icon>&ndash;&gt;-->
<!--      &lt;!&ndash;			<progress :value="volume" max="100" @click="setVolume($event)" class="mr-4 w-20"></progress>&ndash;&gt;-->
<!--      <VolumeNotice @click.stop="volume = 100" size="24" />-->
<!--    </div>-->
    <audio :src="curSong.src" ref="audio" class="hidden"></audio>
  </div>
</template>

<script>
import { GoEnd,GoStart,Pause, PlayOne, VolumeNotice } from '@icon-park/vue-next'

export default {
  name: 'Player',
  components: {
    Pause,
	  PlayOne,
    VolumeNotice,
	  GoEnd,GoStart
  },
  data() {
    return {
      isPlaying: false,
      playList: [],
      curSong: {
        src: 'https://freepd.com/music/Beat%20Thee.mp3',
        pic: 'https://pic1.zhimg.com/v2-6dbf4602dfea996fb6fd6d74180baabf_xs.jpg?source=1940ef5c',
        author: '阿荣',
        title: '你的答案',
        curTime: null,
        durationTime: null,
        percent: 0,
      },
      volume: 50,
    }
  },
  computed: {
    AUDIO() {
      return this.$refs.audio
    },
  },
  methods: {
    loadSongs() {},
    playSong() {
      this.isPlaying = true
      this.AUDIO.play()
      this.AUDIO.addEventListener('timeupdate', this.durTime)
      this.AUDIO.addEventListener('timeupdate', this.updateProgress)
    },
    pauseSong() {
      this.isPlaying = false
      this.AUDIO.pause()
    },
    prevSong() {},
    nextSong() {},
    setVolume(event) {
      const _width = event.clientWidth
      const clickX = event.offsetX
      this.volume = (clickX / _width) * 100
    },
    updateProgress() {
      const { duration, currentTime } = this.AUDIO
      this.curSong.percent = (currentTime / duration) * 100
    },
    setProgress(event) {
      const _width = event.clientWidth
      const clickX = event.offsetX
      const { duration } = this.AUDIO
      this.AUDIO.currentTime = (clickX / _width) * duration
      console.log(this.AUDIO.currentTime)
      this.curSong.percent = (clickX / _width) * 100
    },
    durTime() {
      const { duration, currentTime } = this.AUDIO
      let sec
      let sec_d

      // define minutes currentTime
      let min = currentTime == null ? 0 : Math.floor(currentTime / 60)
      min = min < 10 ? '0' + min : min

      // define seconds currentTime
      function get_sec(x) {
        if (Math.floor(x) >= 60) {
          for (let i = 1; i <= 60; i++) {
            if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
              sec = Math.floor(x) - 60 * i
              sec = sec < 10 ? '0' + sec : sec
            }
          }
        } else {
          sec = Math.floor(x)
          sec = sec < 10 ? '0' + sec : sec
        }
      }

      get_sec(currentTime, sec)

      // change currentTime DOM
      this.curSong.curTime = min + ':' + sec

      // define minutes duration
      let min_d = isNaN(duration) === true ? '0' : Math.floor(duration / 60)
      min_d = min_d < 10 ? '0' + min_d : min_d

      function get_sec_d(x) {
        if (Math.floor(x) >= 60) {
          for (let i = 1; i <= 60; i++) {
            if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
              sec_d = Math.floor(x) - 60 * i
              sec_d = sec_d < 10 ? '0' + sec_d : sec_d
            }
          }
        } else {
          sec_d = isNaN(duration) === true ? '0' : Math.floor(x)
          sec_d = sec_d < 10 ? '0' + sec_d : sec_d
        }
      }

      // define seconds duration

      get_sec_d(duration)

      // change duration DOM
      this.curSong.durationTime = min_d + ':' + sec_d
    },
  },
}
</script>

<style lang="scss" scoped>
.player{
	background: #ffffff;
	box-shadow: 0 -4px 8px rgba(0,0,0,.1);
}
</style>
