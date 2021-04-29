<template>
	<div class="flex overflow-hidden" id="app">
		<Menu/>
		<router-view class="p-4 w-full"/>
		<Player/>
	</div>
</template>

<script>
import {app} from "@tauri-apps/api"
import {notification} from "@tauri-apps/api"
console.log(notification)
export default {
	components:{
		// Menu:()=>import("@/components/Menu")
		Player:()=>import("@/components/Player")
	},
	watch:{
		$router(to,from){
			console.log(to,from)
		}
	},
	data(){
		return {
			version:''
		}
	},
	async created() {
		this.version = await app.getTauriVersion()
		console.log(this.version)
	}
}
</script>
