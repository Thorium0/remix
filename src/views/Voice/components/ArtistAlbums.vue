<template>
	<div class="albums">
		<!--TODO 滚动加载-->
		<List :list="album.hotAlbums"/>
	</div>
</template>

<script>
import {mapState} from "vuex"
import List from "@/components/List"
export default {
	name: "albums",
	components:{
		List
	},
	computed:mapState("voice",["album"])
};

</script>