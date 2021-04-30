<template>
	<div class="top-bar absolute top-0 left-0 flex p-2">
		<div class="close" @click.stop="_close">
			<span>&times;</span>
		</div>
		<div class="minimize">
			<span>&minus;</span>
		</div>
		<div class="zoom">
			<span>&plus;</span>
		</div>
	</div>
</template>

<script>
import {app} from "@tauri-apps/api"
export default {
	name: "index",
	methods:{
		_close(){
			app.exit(-1)
		}
	}
};

</script>

<style scoped lang="scss">
.top-bar{
	.close,.minimize,.zoom{
		@apply flex items-center justify-center rounded-full mr-1.5 w-3 h-3 text-black;
		span{
			@apply scale-0 opacity-0 transition-all duration-200;
		}
	}
	.close{
		background-color: #ff5552;
	}
	.minimize{
		background-color: #ffb33b;
	}
	.zoom{
		background-color: #00c042;
	}

	&:hover{
		.close,.minimize,.zoom{
			span{
				@apply scale-100 opacity-100;
			}
		}
	}
}
</style>