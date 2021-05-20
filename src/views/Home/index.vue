<template>
	<div class="grid gap-4 home">
		<Slide/>
		<NewSongs/>
		<RecRadio/>
		<RecMV/>
	</div>
</template>

<script>
export default {
	name: "Home",
	components:{
  		Slide:()=>import("./components/Slide/index.vue"),
  		NewSongs:()=>import("./components/NewSongs/index.vue"),
  		RecRadio:()=>import("./components/RecRadio/index.vue"),
  		RecMV:()=>import("./components/RecMV/index.vue")
	},
	data:()=>({
		data: [],
	}),
	created() {},
	mounted() {},
	methods: {},
};
</script>
