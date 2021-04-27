<template>
	<div class="flex overflow-hidden" id="app">
<!--		<Menu/>-->
<!--		<router-view class="p-4 w-full"/>-->
		{{version}}
	</div>
<!--	<Player/>-->
</template>

<script>
import {app} from "@tauri-apps/api"

export default {
	components:{
		// Menu:()=>import("@/components/Menu")
		// Player:()=>import("@/components/Player")
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
	created() {
		app.getName().then(res=>{
			console.log(res,"res")
		})
	}
}
</script>
