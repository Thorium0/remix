<template>
	<div class="aside flex-none w-40">
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
export default {
	name: "index",
	data(){
		return{
			menus: {
				menu:{
					text:"Music",
					children:[
						{path:"/",iconClass: 'home',text:"首页"},
						{path:"/",iconClass:'find-one',text:"发现"},
						{path:"/",iconClass:'category-management',text:"MV"},
						{path:"/",iconClass:'cd',text:"专辑"},
						{path:"/",iconClass:'voice',text:"歌手"},
						{path:"/broadcast-radio",iconClass:'broadcast-radio',text:"电台"},
						{path:"/",iconClass:'heartbeat',text:"最爱"},
					]
				},
				playlist:{
					text:"Playlist",
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
<style lang="scss" scoped>
.aside {
	@apply py-8 text-black;
	&-item {
		@apply leading-6 mb-4;
		h2 {
			@apply px-8 text-gray-200 font-bold opacity-75;
		}
		li {
			@apply flex items-center relative px-8 cursor-pointer;
			.svg-icon {
				@apply mr-3.5;
			}
			&.active {
				&:after {
					@apply absolute block top-0 right-0 h-full w-0.5 bg-primary text-primary;
					content: "";
					color: #2ddae8;
				}
			}
		}
	}
}
</style>
