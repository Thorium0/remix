<template>
	<div class="grid gap-4 home" v-show="!loading">
		<Slide/>
		<NewSongs/>
		<RecRadio/>
		<RecMV/>
	</div>
</template>

<script>
import {mapState} from "vuex"
export default {
	name: "Home",
	components:{
  		Slide:()=>import("./components/Slide/index.vue"),
  		NewSongs:()=>import("./components/NewSongs/index.vue"),
  		RecRadio:()=>import("./components/RecRadio/index.vue"),
  		RecMV:()=>import("./components/RecMV/index.vue")
	},
	computed:mapState(["loading"]),
	created() {
		this.$store.dispatch("home/GetList");
	}
};
</script>
