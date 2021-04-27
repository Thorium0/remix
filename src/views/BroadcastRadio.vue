<template>
	<div class="broadcast-radio">
		<div class="flex justify-between tab">
			<span
				v-for="(item, key) in categories"
				class="block flex-1 text-center cursor-pointer transition duration-300 ease-in-out"
				:key="key"
				:class="{'text-primary':active===key}"
				@click="active=key">
				{{item.name}}
			</span>
		</div>

		<!--电台详情-->
		<div class="radio-detail">
			{{JSON.stringify(detail)}}
		</div>
	</div>
</template>

<script>
export default {
	name: "BroadcastRadio",
	data(){
		return{
			categories:[],
			detail:{},
			active:0
		}
	},
	created() {
		this.init();
	},
	methods:{
		init() {
			this.$axios({
				url:"/dj/catelist",
				methods:"post"
			}).then(res=>{
				const {categories} = res
				this.categories=Object.freeze(categories)
				this._detail()
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

</style>
