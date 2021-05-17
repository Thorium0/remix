<template>
	<div class="aside">
		<h1>Remix</h1>
		<div class="aside-item" v-for="(item, key) in Object.keys(menus)" :key="key">
			<h2>{{menus[item].text}}</h2>
			<router-link :to="{path:child.path}" v-for="(child,idx) in menus[item].children" :key="idx">
				<span class="text-left"><component :is="child.iconClass" size="18"/></span>
				<span class="mx-4 text-sm font-normal">{{child.text}}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
import {Home,FindOne,CategoryManagement,Cd,Voice,BroadcastRadio,Heartbeat,Undo,LocalPin} from "@icon-park/vue"
export default {
	name: "index",
	components:{
		Home,FindOne,CategoryManagement,Cd,Voice,BroadcastRadio,Heartbeat,Undo,LocalPin
	},
	data(){
		return{
			menus: {
				menu:{
					text:"Music",
					children:[
						{path:"/",iconClass: 'Home',text:"首页"},
						{path:"/",iconClass:'FindOne',text:"发现"},
						{path:"/",iconClass:'CategoryManagement',text:"MV"},
						{path:"/",iconClass:'Cd',text:"专辑"},
						{path:"/",iconClass:'Voice',text:"歌手"},
						{path:"/broadcast-radio",iconClass:'BroadcastRadio',text:"电台"},
						{path:"/",iconClass:'Heartbeat',text:"最爱"},
					]
				},
				playlist:{
					text:"Playlist",
					children:[
						{path:"/",iconClass:'Undo',text:"最近"},
						{path:"/",iconClass:'Cd',text:"专辑"},
						{path:"/",iconClass:'Heartbeat',text:"最爱"},
						{path:"/",iconClass:'LocalPin',text:"本地"},
					]
				}
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.aside {
	@apply py-8 text-black px-4 w-48;
	h1{
		@apply text-2xl text-center mb-8;
	}
	&-item {
		@apply leading-6 mb-4;
		h2 {
			@apply text-gray-300 ml-2 w-full pb-2 border-gray-100 mb-2 text-sm font-normal;
		}
		a{
			@apply cursor-pointer hover:text-white font-thin text-gray-500 flex items-center p-2 my-1 transition-colors duration-200 justify-start rounded-full;
			&:hover{
				background-color: #ffb33b;
			}
		}
	}
}
</style>
