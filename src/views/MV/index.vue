<template>
	<div class="mv">
		<div class="mv-filters">
			<div class="area"><em>地区：</em><span v-for="item in area" :key="item" @click.stop="_params(item,'area')">{{item}}</span></div>
			<div class="type"><em>类型：</em><span v-for="item in type" :key="item" @click.stop="_params(item,'type')">{{item}}</span></div>
		</div>
		<List :list="list"/>
	</div>
</template>
<script>
import List from "@/components/List/index.vue"
export default {
	name:"MV",
	components: {
		List
	},
	data:()=>({
		list:[],
		area:['全部','内地','港台','欧美','日本','韩国'],
		type:['全部','官方版','原生','现场版','网易出品'],
		params:{
			area:'',
			type:''
		}
	}),
	created() {
		this.init()
	},
	methods:{
		init(){
			const {area,type}=this.params;
			this.$axios({
				methods:"POST",
				url:`/mv/all?area=${area}&type=${type}`
			}).then(res=>{
				const {data} = res;
				this.list=Object.freeze(data)
			})
		},
		_params(val,type){
			this.params[type]=val;
			this.init();
		}
	}
}
</script>

<style lang="scss" scoped>
.mv-filters{
	@apply leading-8 text-xs;
	.area,.type{
		em{
			@apply font-medium not-italic;
		}
		span{
			@apply p-1.5 mr-4 transition duration-300 cursor-pointer;
			&:hover,&.active{
				@apply bg-primary rounded text-white;
			}
		}
	}
}
</style>