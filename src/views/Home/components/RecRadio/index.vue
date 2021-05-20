<template>
	<Recommend
		:title="'推荐电台'"
		:to="'/broadcast-radio'"
		:list="list"
		name="radio"
	/>
</template>

<script>

export default {
	name: "RecRadio",
	components:{
		Recommend:()=>import("@/components/Recommend/index.vue")
	},
	data:()=>({
		list:[]
	}),
	created() {
		this.init()
	},
	methods:{
		init(){
			this.$axios({
				methods:"POST",
				url:"/personalized/djprogram"
			}).then(res=>{
				console.log(res)
				const {result} = res;
				this.list=Object.freeze(result)
			})
		}
	}
};
</script>
