<template>
	<div class="mv">
		<div class="filters">
			<div class="area"><em>地区：</em><span v-for="item in area" :key="item" @click.stop="_params(item,'area')" :class="{active:params.area===item}">{{item}}</span></div>
			<div class="type"><em>类型：</em><span v-for="item in type" :key="item" @click.stop="_params(item,'type')" :class="{active:params.type===item}">{{item}}</span></div>
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
			area:'全部',
			type:'全部'
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