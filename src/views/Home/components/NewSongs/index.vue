<template>
	<Recommend
		:title="'推荐歌单'"
		:to="'/discovery'"
		:list="list"
		name="songs"
	/>
</template>

<script>
export default {
	name: "NewSongs",
	components:{
		Recommend:()=>import("@/components/Recommend/index.vue")
	},
	data() {
		return {
			list: [],
		};
	},
	created() {
		this.$axios({
			url: "/personalized?limit=12",
		}).then((res) => {
			console.log("🚀 ~ file: NewSongs.vue ~ line 33 ~ created ~ res", res)
			const {result} = res
			this.list = Object.freeze(result);
		});
	},
};
</script>
