<template>
	<div class="cd">
		<List :list="list"/>
	</div>
</template>

<script>
import List from "@/components/List/index.vue"
export default {
	name: "CD",
	components:{
		List
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
				url:"/album/newest"
			}).then(res=>{
				console.log(res)
				const {albums} = res;
				this.list=Object.freeze(albums)
			})
		}
	}
};

</script>

<style scoped lang="scss"></style>