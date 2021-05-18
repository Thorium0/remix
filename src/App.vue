<template>
	<div class="flex" id="app">
		<Sidebar/>
		<div class="main flex flex-col flex-1">
<!--			<SearchArea/>-->
			<keep-alive>
				<router-view class="view p-4"/>
			</keep-alive>
		</div>
		<Player/>
	</div>
</template>

<script>
import {app} from "@tauri-apps/api"

export default {
	components:{
		Sidebar:()=>import("@/components/Sidebar"),
		Player:()=>import("@/components/Player"),
		// SearchArea:()=>import("@/components/SearchArea")
	},
	watch:{
		$router(to,from){
			console.log(to,from)
		}
	},
	data(){
		return {
			version:'',
			isApp:true
		}
	},
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
<style>
.view{
	max-height: calc(100vh - 4rem);
	overflow-y: scroll;
	scroll-behavior: smooth;
}
</style>
