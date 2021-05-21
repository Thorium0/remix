<template>
	<div class="broadcast-radio">
		<div v-for="(item,key) in list" class="broadcast-radio-item" :key="item.id" :style="{'background-color':colors[key]}">
			{{item.name}}
		</div>
	</div>
</template>

<script>
import {mapState} from "vuex"
export default {
	name: "BroadcastRadio",
	data(){
		return{
			colors:["#994ff3","#e5c38d","#cbc69a","#f2eef5","#b1c9a7","#7ccfc1","#62d2ce","#48d5db","#2dd8e8","#40dcea","#96ccb4","#fbdd74"],
			detail:{},
			active:0
		}
	},
	computed:mapState('radio',['list']),
	created() {
		this.$store.dispatch("radio/GetList")
	}
};
</script>

<style scoped lang="scss">
.broadcast-radio{
	@apply grid gap-4 grid-cols-3 h-full;
	&-item{
		background-color: #ff8e99;
		@apply flex items-center justify-center cursor-pointer transition duration-300 ease-in-out text-white text-base;
	}
}
</style>
