<template>
	<Recommend
		:title="'推荐MV'"
		:to="'/mv'"
		:list="list"
		name="mv"
	/>
</template>

<script>

export default {
	name: "RecMV",
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
				url:"/personalized/mv"
			}).then(res=>{
				console.log(res)
				const {result}=res;
				this.list=Object.freeze(result)
			})
		}
	}
};
</script>
