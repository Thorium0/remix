<template>
	<Recommend :title="'推荐歌单'" :to="'/discovery'" :list="songs" name="songs" />
</template>

<script>
import {mapState} from "vuex"
export default {
	components:{
		Recommend:()=>import("@/components/Recommend/index.vue")
	},
	name: "NewSongs",
	computed:mapState('home',[
		'songs'
	])
};
</script>
