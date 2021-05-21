<template>
	<div class="cd">
		<div class="filters">
			<div class="area"><em>地区：</em><span v-for="item in area" :key="item.value" @click.stop="_params(item.value,'area')" :class="{active:params.area===item.value}">{{item.label}}</span></div>
		</div>
		<List :list="albums.albumProducts"/>
	</div>
</template>

<script>
import List from "@/components/List/index.vue"
import {mapState,mapActions} from "vuex"
export default {
	name: "CD",
	components:{
		List
	},
	data:()=>({
		area:[{label:'华语',value:"Z_H"},{label:'欧美',value:"E_A"},{label:'韩国',value:"KR"},{label:'日本',value:"JP"}],
		params:{
			area:'Z_H',
		}
	}),
	computed:mapState('cd',['albums']),
	created() {
		this.GetList(this.params)
	},
	methods:{
		...mapActions("cd",['GetList']),
		_params(val,type){
			this.params[type]=val;
			this.GetList(this.params)
		}
	}
};

</script>