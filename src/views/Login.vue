<template>
	<div class="login w-screen h-screen flex flex-col justify-center items-center">
<!--		<input type="text" placeholder="Enter your account" class="input-primary" />-->
<!--		<input type="password" placeholder="Enter your password" class="input-primary" />-->

<!--		<button class="btn-primary">Sign in</button>-->
<!--		<button class="btn-primary">Sign up</button>-->
		<ul>
			<li v-for="(item,key) in list" :key="key">
				name:{{item.name}}
				<img :src="item.picUrl" :alt="item.name">
			</li>
		</ul>
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
		this.GetAllArtist();
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
