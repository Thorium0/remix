<template>
	<div class="sidebar">
		<h1><img src="@/assets/images/remix.jpg" alt=""></h1>
		<div class="sidebar-item">
			<router-link v-for="item in menus" :to="{path:item.path}" :key="item.text">
				<span class="text-left"><component :is="item.iconClass" size="18"/></span>
				<span class="mx-4 text-sm font-normal">{{item.text}}</span>
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
			menus: [
				{path:"/",iconClass: 'Home',text:"首页"},
				{path:"/",iconClass:'FindOne',text:"发现"},
				{path:"/",iconClass:'CategoryManagement',text:"MV"},
				{path:"/",iconClass:'Cd',text:"专辑"},
				{path:"/",iconClass:'Voice',text:"歌手"},
				{path:"/broadcast-radio",iconClass:'BroadcastRadio',text:"电台"},
				{path:"/",iconClass:'Heartbeat',text:"最爱"},
				{path:"/",iconClass:'LocalPin',text:"本地"},
				{path:"/",iconClass:'Undo',text:"最近"},
			]
		}
	}
};
</script>
<style lang="scss" scoped>
.sidebar {
	@apply flex-none py-8 pr-4 text-black w-48 border-r border-gray-100;
	h1{
		@apply px-4 text-2xl text-center mb-8;
		img{
			@apply inline-block w-16 h-16 object-cover rounded-full shadow-lg;
		}
	}
	&-item {
		span{
			@apply relative z-10;
		}
		a{
			@apply mb-4 cursor-pointer relative py-2 px-4 leading-6 font-thin text-gray-500 flex items-center justify-start duration-200;
			&:after{
				content: "";
				transform: translateX(-100%);
				@apply block absolute w-full h-full transition-all top-0 left-0 rounded-r-full duration-300 bg-primary shadow-lg;
			}
			&:hover{
				@apply text-white;
				&:after{
					//@apply -translate-y-0;
					transform: none;
				}
			}
		}
	}
}
</style>
