<template>
	<div class="broadcast-radio">
		<div v-for="(item, key) in categories" class="broadcast-radio-item" :class="{'loaded':!loading}" :key="key" :style="{'background-color':colors[key]}">
			{{item.name}}
		</div>
	</div>
</template>

<script>
export default {
	name: "BroadcastRadio",
	data(){
		return{
			colors:["#994ff3","#e5c38d","#cbc69a","#f2eef5","#b1c9a7","#7ccfc1","#62d2ce","#48d5db","#2dd8e8","#40dcea","#96ccb4","#fbdd74"],
			categories:[],
			detail:{},
			active:0,
			loading:true
		}
	},
	created() {
		this.init();
	},
	methods:{
		init() {
			this.loading=true;
			this.$axios({
				url:"/dj/catelist",
				methods:"post"
			}).then(res=>{
				const {categories} = res
				this.categories=Object.freeze(categories)
				this._detail()
				this.loading=false;
			})
		},
		_detail() {
			this.$axios({
				url:"/dj/detail?rid=3"
			}).then(res=>{
				console.log(res)
				const {data} = res;
				this.detail=data;
			})
		}
	}
};
</script>

<style scoped lang="scss">
.broadcast-radio{
	@apply grid gap-4 grid-cols-3 h-full;
	&-item{
		background-color: #ff8e99;
		transform: translateY(-100%);
		@apply flex items-center justify-center cursor-pointer transition duration-300 delay-150 ease-in-out text-white text-base opacity-0;
		&.loaded{
			transform: none;
			opacity: 1;
		}
	}
}
</style>
