<template>
	<div class="home flex h-screen w-screen">
		<div class="aside flex-none w-52 p-4">
			<Login />
			<div class="aside-item mb-4 flex items-center" v-for="(item,key) in ball" :key="key">
				<div class="aside-item-icon mr-4 w-6 h-6 rounded-lg" :style="`background-image:url(${item.iconUrl}),linear-gradient(#2ddae8,#2ddae8)`"></div>
				<div class="aside-item-name">{{item.name}}</div>
			</div>
		</div>
		<div class="main flex-grow p-4 overflow-x-hidden">
			<Slide/>
		</div>
	</div>
</template>

<script>

export default {
	name: "Home",
	components:{
		Login:()=>import("@/components/Login"),
		Slide:()=>import("@/components/Slide")
	},
	data(){
		return{
			ball:[]
		}
	},
	created(){
		this.init();
	},
	methods:{
		init(){
			this.$axios({
				methods:"POST",
				url:"/homepage/dragon/ball"
			}).then(res=>{
				const {data}=res;
				this.ball=Object.freeze(data||[])
			})
		}
	}
};
</script>

<style lang="scss" scoped>
:root{
	--tw-ring-offset-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
}
.aside{
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
	&-item{
		&-icon{
			background-blend-mode:lighten;
			background-size: cover;
		}
	}
}
</style>
