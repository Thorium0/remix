<template>
	<div class="aside flex-none w-40 bg-subBlack">
		<h1 class="text-2xl text-center mb-8">Remix</h1>
		<div class="aside-item" v-for="(item, key) in Object.keys(menus)" :key="key">
			<h2>{{menus[item].text}}</h2>
			<ul>
				<router-link tag="li" :to="{path:child.path}" v-for="(child,idx) in menus[item].children" :key="idx"><svg-icon :icon-class="child.iconClass"></svg-icon>{{child.text}}</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
// import "./index.scss";
export default {
	name: "index",
	data(){
		return{
			menus: {
				menu:{
					text:"菜单",
					children:[
						{path:"/",iconClass:'find-one',text:"发现"},
						{path:"/",iconClass:'category-management',text:"MV"},
						{path:"/",iconClass:'cd',text:"专辑"},
						{path:"/",iconClass:'voice',text:"歌手"},
						{path:"/broadcast-radio",iconClass:'broadcast-radio',text:"电台"},
					]
				},
				self:{
					text:"我的",
					children:[
						{path:"/",iconClass:'undo',text:"最近"},
						{path:"/",iconClass:'cd',text:"专辑"},
						{path:"/",iconClass:'heartbeat',text:"最爱"},
						{path:"/",iconClass:'local-pin',text:"本地"},
					]
				},
				playlist:{
					text:"歌单",
					children:[
						{path:"/",iconClass:'undo',text:"最近"},
						{path:"/",iconClass:'cd',text:"专辑"},
						{path:"/",iconClass:'heartbeat',text:"最爱"},
						{path:"/",iconClass:'local-pin',text:"本地"},
					]
				}
			}
		}
	}
};
</script>
