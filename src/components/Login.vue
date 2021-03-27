<template>
	<div class="login mb-10">
		<button class="btn-primary block w-full">登录</button>
	</div>
</template>

<script>
export default {
	name: "Login",
	data(){
		return{
			list:[]
		}
	},
	created(){
		// this.GetAllArtist();

	},
	methods:{
		async GetAllArtist(){
			const {data:{artists}} = await this.$axios({
				methods:"POST",
				url:"/artist/list",
				data:{
					type:-1,
					area:-1
				}
			})
			this.list=Object.freeze(artists||[])
		}
	}
};
</script>

<style scoped lang="scss">

</style>
