<template>
	<div class="flex" id="app">
		<TopBar v-show="isApp"/>
		<Sidebar/>
		<div class="main flex flex-col flex-1">
			<SearchArea/>
<!--			<router-view class="p-4"/>-->
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
		TopBar:()=>import("@/components/TopBar"),
		SearchArea:()=>import("@/components/SearchArea")
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
