<template>
	<div id="app">
		<Sidebar/>
		<div class="main">
			<keep-alive>
				<router-view class="view"/>
			</keep-alive>
			<Loading v-show="loading"/>
		</div>
		<Player/>
	</div>
</template>

<script>
import {app} from "@tauri-apps/api"
import {mapState} from "vuex"

export default {
	components:{
		Sidebar:()=>import("@/components/Sidebar"),
		Player:()=>import("@/components/Player"),
		Loading:()=>import("@/components/Loading/index.vue")
	},
	watch:{
		$router(to,from){
			console.log(to,from)
		}
	},
	data(){
		return {
			version:'',
			isApp:true,
		}
	},
	computed:mapState({
		loading:'loading'
	}),
	async created() {
		try{
			this.version = await app.getTauriVersion()
		}catch (e) {
			console.log(e)
			this.isApp=false;
		}
	}
}
</script>
<style lang="scss">
.main{
	@apply relative flex overflow-hidden overflow-y-scroll pb-4;
	height: calc(100vh - 4rem);
	scroll-behavior: smooth;
}
.view{
	@apply w-full h-full p-4;
}
</style>
