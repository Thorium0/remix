<template>
	<div data-tauri-drag-region class="top-bar">
		<div class="top-bar-edge"></div>
		<div class="macos-buttons">
			<button class="macos-close" @click="close"></button>
			<button class="macos-minimize" @click="minimize"></button>
			<button class="macos-maximize" @click="toggleMaximize"></button>
		</div>
		<div class="nav">
			<router-link class="nav-link" :to="{path:'/'}" active-class="active">All</router-link>
			<router-link class="nav-link" :to="{path:'/'}">Trending</router-link>
			<router-link class="nav-link" :to="{path:'/'}">Radio</router-link>
			<router-link class="nav-link" :to="{path:'/'}">Podcast</router-link>
			<router-link class="nav-link" :to="{path:'/'}">Library</router-link>
		</div>
	</div>
	<router-view class="flex-auto view"/>
	<Loading v-show="loading" />
	<Player />
</template>

<script>
import {defineAsyncComponent} from "vue";
import {app} from "@tauri-apps/api";
import { appWindow } from '@tauri-apps/api/window'
import {mapState} from "vuex";

export default {
	components: {
		Player: defineAsyncComponent(() => import("@/components/Player/index.vue")),
		Loading: defineAsyncComponent(() =>
			import("@/components/Loading/index.vue")
		)
	},
	watch: {
		$router(to, from) {
			console.log(to, from);
		}
	},
	data() {
		return {
			version: "",
			isApp: true
		};
	},
	computed: mapState({
		loading: "loading"
	}),
	async created() {
		try {
			this.version = await app.getTauriVersion();
		} catch (e) {
			console.log(e);
			this.isApp = false;
		}
	},
	methods:{
		minimize:()=>appWindow.minimize(),
		toggleMaximize:()=>appWindow.toggleMaximize(),
		close:()=>appWindow.close()
	}
};
</script>

<style lang="scss" scoped>
.view {
	@apply relative w-full p-10 overflow-hidden;
	scroll-behavior: smooth;
}

.top-bar {
	-webkit-app-region: drag;
	border-radius: 8px;
	font-family: 'Roboto', sans-serif;
	z-index: 9999;
	@apply flex-none bg-white h-12 w-screen flex justify-between items-center;

	.nav {
		@apply flex items-center text-sm;
		&-link {
			@apply relative flex flex-shrink-0 mr-6 items-center;
			text-transform: capitalize;
			letter-spacing: -0.09px;
			color: rgba(0, 0, 0, .75);
			transition: all .2s;

			&::after {
				content: '';
				height: 2px;
				position: absolute;
				bottom: -3px;
				left: 0;
				transition: all .2s;
				width: 0;
				background-color: #e72c30;
			}

			&.active, &:hover {
				opacity: .8;
				transition: all .2s;

				&::after {
					width: 80%;
				}
			}
		}
	}
}

.top-bar-edge {
	cursor: ns-resize;
	height: 6px;
	-webkit-app-region: no-drag;
}

.top-bar button {
	-webkit-app-region: no-drag;
}

.macos-buttons {
	position: absolute;
	top: 10px;
	left: 12px;
	text-align: center;
	pointer-events: auto
}

.macos-buttons button {
	padding: 0 !important;
	height: 12px;
	width: 12px !important;
	border-radius: 50%;
	background-clip: padding-box;
	-webkit-transition: background-color .2s;
	transition: background-color .2s;
	border: 0;
	cursor: pointer;
}

.macos-buttons button:hover {
	opacity: 1
}

.macos-buttons button:focus {
	outline: 0;
}

.macos-buttons button+button {
	margin-left: 6px
}

.macos-close {
	background-color: #fb615b!important
}

.macos-minimize {
	background-color: #fdbd41!important
}

.macos-maximize {
	background-color: #33c749!important
}

//.windows-buttons {
//	float: right;
//}
//
//.windows-buttons button {
//	padding: 0 !important;
//	height: 12px;
//	width: 12px !important;
//	border-radius: 0%;
//	background-clip: padding-box;
//	background-color: #0000;
//	-webkit-transition: background-color .2s;
//	transition: background-color .2s;
//	opacity: .7;
//	border: 0;
//	cursor: pointer;
//	color: white;
//	margin-top: 1px !important;
//}
//
//.windows-buttons button+button {
//	margin-left: 10px
//}
//
//.windows-close::after {
//	content: '✕';
//	font-size: 140%;
//}
//
//.windows-maximize {
//	border: 1px solid white !important;
//	border-top: 2px solid white !important;
//}
//
//.windows-minimize {
//	border-bottom: 2px solid white !important;
//}
//
//.windows-buttons:last-child {
//	margin-right: 10px !important;
//}

</style>
